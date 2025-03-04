import { validationResult } from "express-validator";
import { HashePassword } from "../authentication/crypt.js";
import {
  captainFindService,
  captainRegisterService,
} from "../services/captainService.js";
import { generateToken } from "../authentication/jwt.js";

export const captainRegisterControllers = async (req, res) => {
  try {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const alreadyCaptain = await captainFindService(email);
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
      message: "Captain registered successfully",token,captain,
    });
  } catch (error) {
    console.log(
      "error at controllers while registering captain" + error.message
    );
  }
};
