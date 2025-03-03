import jwt from "jsonwebtoken";
export let generateToken = (playload) => {
  try {
    let token = jwt.sign({_id: playload}, process.env.SECRET_KEY, { expiresIn: '24h' });
    return token;
  } catch (error) {
    console.log("error occured while generating token" + error.message);
  }
};
