import bcrypt from "bcrypt";
export let HashePassword = async (plainPassword) => {
  try {
    let password = await bcrypt.hash(plainPassword, 10);
    return password;
  } catch (error) {
    console.log("error occured while hashing password " + error.message);
  }
};

export let comparePassword = async(plainPassword,hashedPassword)=>{

  try {
    let password = await bcrypt.compare (plainPassword,hashedPassword);
    return password;
  } catch (error) {
    console.log("error occured while comparing password from crypt" + error.message);
    
  }

}
