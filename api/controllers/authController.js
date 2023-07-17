import User from '../models/userModel.js';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET);

const createSendToken = async (user, statusCode, req, res) => {
  const token = await signToken(user._id);
  const cookieOptions = {
    expiresIn: new Date(
      Date.now() +
        process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure:
      req.secure || req.headers['x-forwarded-proto'] === 'https',
  };

  // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // to hide from response
  user.password = undefined;

  res
    .status(statusCode)
    .json({ status: 'success', token, data: { user } });
};

export const register = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      passwordChangedAt: req.body.passwordChangedAt,
      phone: req.body.phone,
      city: req.body.city,
    });

    createSendToken(newUser, 201, req, res);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 1) Check if email and password exists

    if (!email || !password) {
      return next(
        createError(400, 'Please provide email and password')
      );
    }

    // 2) Check if user exists & password is correct
    const user = await User.findOne({ email }).select('+password');

    if (
      !user ||
      !(await user.passwordIsCorrect(password, user.password))
    ) {
      return next(createError(401, 'Incorrect email or password'));
    }
    // 3) If everything ok, send token to the client

    createSendToken(user, 201, req, res);
  } catch (err) {
    next(err);
  }
};

export const protect = async (req, res, next) => {
  try {
    // 1) Getting token and checking if it's there

    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      console.log(req.headers);
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies?.jwt) {
      token = req.cookies?.jwt;
    }

    if (!token) {
      return next(
        createError(
          401,
          'You are not logged in. Please log in to get access'
        )
      );
    }
    // 2) Verification of the token

    const decoded = await verifyToken(token);

    // 3) Check if user still exists
    const freshUser = await User.findById(decoded.id);

    if (!freshUser) {
      return next(
        createError(401, 'User with this token no longer exists.')
      );
    }
    // 4) Check if user changes password after the token was issued

    if (freshUser.changedPasswordAfter(decoded.iat)) {
      return next(
        createError(
          401,
          'Token is expired, because user password was changed'
        )
      );
    }

    req.user = freshUser;
    res.locals.user = freshUser;

    next();
  } catch (err) {
    next(err);
  }
};

export const restrictToAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      createError(
        403,
        'You do not have permission to perform this action'
      )
    );
  }
  next();
};

export const logout = (req, res, next) => {
  res.cookie('jwt', 'loggedOut', {
    expires: new Date(Date.now() + 10 * 1000),
    // httpOnly: true,
  });

  res.status(200).json({ status: 'success' });
};
