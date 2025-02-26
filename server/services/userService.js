import userModel from "../model/userModel.js";

export let userRegisterService = async (fullname, email, password) => {
  try {
    console.log(fullname, email, password + " from services");
    if (!fullname || !email || !password) {
      throw new Error("All fields are required");
    }
    let user = userModel.create({
      fullname,
      email,
      password,
    });

    return user;
  } catch (error) {
    console.log(
      "error occure at services while registering user " + error.message
    );
  }
};

export let userFindService = async (email) => {
  try {
    let user = await userModel.findOne({ email }).select("+password");
    return user;
  } catch (error) {
    console.log(
      "error occued while finding user from services " + error.message
    );
  }
};
