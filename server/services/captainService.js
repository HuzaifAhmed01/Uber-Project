import captainModel from "../model/captainModel.js";

export let captainRegisterService = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  try {
    if (
      !firstname ||
      !email ||
      !password ||
      !color ||
      !plate ||
      !capacity ||
      !vehicleType
    ) {
      // throw new Error("All fields are required");
    }
    let captain = await captainModel.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });
    return captain;
  } catch (error) {
    console.log(
      "error cought while creating captain from services " + error.message
    );
  }
};

export let captainFindService = async (email) => {
  try {
    const captain = await captainModel.findOne({ email });
    return captain;
  } catch (error) {
    console.log(
      "error occured while finding captain from services " + error.message
    );
  }
};

// {
//   "success": true,
//   "message": "Captain registered successfully",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M3M2ZkZWY4ZjBjZjA0MGNmYTFkZjYiLCJpYXQiOjE3NDExMTEyNjIsImV4cCI6MTc0MTE5NzY2Mn0.dSuWI7qfsirm8vFw_8O1QSETbuqwoil7IpIxBfJxrMc",
//   "captain": {
//       "fullname": {
//           "firstname": "test_captain_firstname",
//           "lastname": "test_captain_lastname"
//       },
//       "email": "test_email@gmail.com",
//       "password": "$2b$10$iq7h6jsse/ZoxFwnsyF5jOnXKGleQoZZAqWfrrp8bEyPOpTKUd/yW",
//       "status": "inactive",
//       "vehicle": {
//           "color": "red",
//           "plate": "MH 26 ND 349",
//           "capacity": 3,
//           "vehicleType": "car"
//       },
//       "_id": "67c73fdef8f0cf040cfa1df6",
//       "__v": 0
//   }
// }
