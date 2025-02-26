import mongoose from "mongoose";

let userSchema = mongoose.Schema({
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
    minlength: [5, "Email must be atleast 5 characters long"],
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
});

let userModel = mongoose.model("user", userSchema);

export default userModel;
