import mongoose from "mongoose";

let captainSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be atleast 3 characters"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Last name must be atleast 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Email is not valid"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 characters"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be atleast 3 characters"],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, "Capacity must be atleast 1 "],
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "auto"],
      required: true,
    },
  },

  location: {
    lat: {
      type: Number,
      // required: true,
    },
    lng: {
      type: Number,
      // required: true,
    },
  },
});

let captainModel = mongoose.model("captain", captainSchema);

export default captainModel;
