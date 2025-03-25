import BlacklistedTokenModel from "../model/blacklistedTokenModel.js";
import captainModel from "../model/captainModel.js";
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";

export let authToken = async (req, res, next) => {
  let token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
  let isBlackListed = await BlacklistedTokenModel.findOne({token});
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized Access for black" });
  }
  try {
    let decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    let user = await userModel.findById(decodeToken._id);

    req.user = user;

    next();
  } catch (error) {
    console.log("error occured while verifying token " + error.message);
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};
export let authCaptain = async (req, res, next) => {
  let token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
  let isBlackListed = await BlacklistedTokenModel.findOne({token});
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
  try {
    console.log(token);
    let decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    let captain = await captainModel.findById(decodeToken._id);

    req.captain = captain;

    next();
  } catch (error) {
    console.log("error occured while verifying token " + error.message);
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};
