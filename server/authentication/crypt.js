import bcrypt from "bcrypt";
export let HashePassword = async (plainPassword) => {
  try {
    let password = await bcrypt.hash(plainPassword, 10);
    return password;
  } catch (error) {
    console.log("error occured while hashing password " + error.message);
  }
};
