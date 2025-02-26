import mongoose, { connect } from "mongoose";

let connectToDb = (dbString) => {
  try {
    mongoose.connect(dbString);
    console.log("database connected");
  } catch (error) {
    console.log(`error occured at ${error.message}`);
  }
};

export default connectToDb;
