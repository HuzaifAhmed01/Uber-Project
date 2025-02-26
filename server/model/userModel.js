import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      minlength: [3, "First name must be atleast 3 characters"],
    },
    lastname: {
      type: String,
      require: true,
      minlength: [3, "Last name must be atleast 3 characters"],
    },
  },
  email: {
    type: String,
    require: true,
    minlength: [5, "Email must be atleast 5 characters long"],
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

let userModel = mongoose.model("user", userSchema);

export default userModel;
