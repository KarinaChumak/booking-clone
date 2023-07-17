import Hotel from '../models/hotelModel.js';

export const createHotel = async (req, res, next) => {
  console.log(req.body);
  try {
    const newHotel = await Hotel.create(req.body);

    res.status(200).json({
      status: ' success',
      data: newHotel,
    });
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json({
      status: 'success',
      data: allHotels,
    });
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedData = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      data: updatedData,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Hotel was sucessfully deleted',
    });
  } catch (err) {
    next(err);
  }
};

export const getOneHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: hotel,
    });
  } catch (err) {
    next(err);
  }
};
