import { validationResult } from "express-validator";
import { userRegisterService } from "../services/userService.js";
import { HashePassword } from "../authentication/crypt.js";
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
