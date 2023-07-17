import mongoose from 'mongoose';

const hotelSchema = mongoose.Schema({
  hotelName: {
    type: String,
    required: [true, 'A hotel must have a name'],
  },
  type: {
    type: String,
    required: [true, 'A hotel must have a type'],
    enum: {
      values: ['hostel', 'apartment', 'hotel'],
      message: 'Type should be on of: hotel, hostel, apartment',
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [0, 'A rating must be from 0 to 10'],
    max: [10, 'A rating must be from 0 to 10'],
    setter: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  city: {
    type: String,
    required: [true, 'A hotel must have a city'],
  },
  address: {
    type: String,
    required: [true, 'A hotel must have an address'],
  },
  photos: [String],

  facilities: {
    type: String,
    enum: [
      'AC',
      'Pet friendly',
      'View',
      'Kitchen',
      'TV',
      'Balcony',
      'Washing machine',
    ],
  },

  rooms: [{ type: mongoose.Schema.ObjectId, ref: 'Room' }],
});

export default mongoose.model('Hotel', hotelSchema);
