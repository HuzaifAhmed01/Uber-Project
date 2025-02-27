import jwt from "jsonwebtoken";
export let generateToken = (playload) => {
  try {
    let token = jwt.sign({id:playload}, process.env.SECRET_KEY);
    return token;
  } catch (error) {
    console.log("error occured while generating token" + error.message);
  }
};
