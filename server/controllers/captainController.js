import { validationResult } from "express-validator";
import { comparePassword, HashePassword } from "../authentication/crypt.js";
import {
  captainFindService,
  captainRegisterService,
} from "../services/captainService.js";
import { generateToken } from "../authentication/jwt.js";
import captainModel from "../model/captainModel.js";
import BlacklistedTokenModel from "../model/blacklistedTokenModel.js";

export const captainRegisterControllers = async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const alreadyCaptain = await captainModel
      .findOne({ email })
      .select("+password");
    if (alreadyCaptain) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    let hashedPassword = await HashePassword(password);

    let captain = await captainRegisterService({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    if (!captain) {
      return res.status(400).json({ message: "Captain not created" });
    }
    let token = generateToken(captain._id);
    res.status(201).json({
      success: true,
      message: "Captain registered successfully",
      token,
      captain,
    });
  } catch (error) {
    console.log(
      "error at controllers while registering captain" + error.message
    );
  }
};

export const captainLoginControllers = async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    let { email, password } = req.body;
    console.log(email, password);

    let user = await captainModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    console.log(user);
    let isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    let token = generateToken(user._id);

    res.cookie("token", token);
    res.status(200).json({ message: "Captain logged in successfully", token  });
  } catch (error) {
    console.log(
      "error occured while logging in captain from controllers " + error.message
    );
  }
};

export const captainProfileControllers = async (req, res) => {
  let captain = req.captain;

  res.status(200).json({ message: "Captain Profile", captain });
};

export const captainLogoutControllers = async (req, res) => {
  let token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistedTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({success:true, message: "Captain logged out successfully" });
};
     