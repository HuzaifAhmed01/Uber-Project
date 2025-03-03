import express from "express";
import { body } from "express-validator";
import { userLoginControllers, userLogoutControllers, userProfileControllers, userRegisterControllers } from "../controllers/userController.js";
import { authToken } from "../middlewares/auth.middleware.js";

let userRoutes = express.Router();
userRoutes.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be atlease 3 charecters long"),
  body("fullname.lastname")
    .isLength({ min: 3 })
    .withMessage("Last name must be atlease 3 charecters long"),
],userRegisterControllers);

userRoutes.post('/login',[
  body("email").isEmail().withMessage("Invalid Email"),
  body("password").isLength({min:5}).withMessage("Password must be atleast 5 charecters long")
],userLoginControllers);


userRoutes.get('/profile',authToken,userProfileControllers);
userRoutes.get('/logout',authToken,userLogoutControllers  );
export default userRoutes;
