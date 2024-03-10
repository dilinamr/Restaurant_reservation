import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "Frist name must contain at least 3 charaters !"],
    maxLength: [30, "Frist name must contain at least 3 charaters !"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 charaters !"],
    maxLength: [30, "Last name must contain at least 3 charaters !"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "provide a valid email"],
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 11 digits!"],
    maxLength: [10, "Phone number must contain 11 digits!"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
export const Reservation = mongoose.model("Reservation", reservationSchema);
