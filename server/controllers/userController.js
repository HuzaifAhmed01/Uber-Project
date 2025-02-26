import { validationResult } from "express-validator";
import {
  userFindService,
  userRegisterService,
} from "../services/userService.js";
import { comparePassword, HashePassword } from "../authentication/crypt.js";
import { generateToken } from "../authentication/jwt.js";

export let userRegisterControllers = async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { fullname, email, password } = req.body;
    console.log(fullname, email, password);
    let hashedPassword = await HashePassword(password);
    let token = generateToken(email);
    let user = await userRegisterService(fullname, email, hashedPassword);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    console.log("error at controllers while registering user" + error.message);
  }
};

export let userLoginControllers = async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    let { email, password } = req.body;

    let user = await userFindService(email);

    if (!user)
      return res.status(401).json({ message: "invalid Email or Password" });

    let isMatch =await comparePassword(password, user.password);
    console.log(user.password);
    if (!isMatch)
      return res.status(401).json({ message: "invalid Email or Password" });

    let token = generateToken(email);
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.log(
      "error occured while logging in user from controllers" + error.message
    );
  }
};
