import mongoose from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, 'A user must have an email'],
    },
    country: {
      type: String,
      // required: [true, 'A user must have a country'],
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      // required: [true, 'A user must have a city'],
    },
    phone: {
      type: String,
      // required: [true, 'A user must have a phoe number'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, 'A user must have a password'],
      minLength: 8,
      // hide from every output
      select: false,
    },

    passwordConfirm: {
      type: String,
      required: true,
      validate: {
        // this only works on SAVE
        validator: function (el) {
          return this.password === el;
        },
        message: 'Passwords are not the same',
      },
    },

    passwordChangedAt: {
      type: Date,
    },
    passwordResetToken: String,
    passwordResetExpirationDate: Date,
  },
  { timestamps: true }
);

// schema middleware
userSchema.pre('save', async function (next) {
  // in case we're updating email or other fields, then this middleware will also be triggered but we don't want to re-encrypt the password
  if (!this.isModified('password')) return next();

  this.password = await bcryptjs.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (this.isModified('password') || this.isNew) return next();
  // sometimes date is created just a bit after JWT, so we substract 1 sec
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// this.password will not be available because we set select: false, therefore we need to pass userPassword explicitly
userSchema.methods.passwordIsCorrect = async function (
  candidatePassword,
  userPassword
) {
  return await bcryptjs.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (
    this.passwordChangedAt &&
    parseInt(this.passwordChangedAt.getTime() / 1000, 10) >
      JWTTimestamp
  ) {
    return true;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpirationDate = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

export default mongoose.model('User', userSchema);
