import { userFindService } from "../services/userService.js";

export let authToken = async (req, res, next) => {
  let token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  try {
    let decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    let user = await userFindService(decodeToken._id);
    console.log(user);

    req.user = user;

    next();
  } catch (error) {
    console.log("error occured while verifying token" + error.message);
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};
