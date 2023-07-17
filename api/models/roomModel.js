import mongoose from 'mongoose';
const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A room must have a title'],
    },
    price: {
      type: Number,
      required: [true, 'Room must have a price'],
    },
    maxPeople: {
      type: Number,
      required: [
        true,
        'A room must have maximum number of people specified',
      ],
    },
    roomNumbers: [
      { number: Number, unavailableDates: { type: [Date] } },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Room', roomSchema);
