// ALL IMPORTS
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./db/connection.js";
import bodyParser from "body-parser";
import userRoutes from "./routers/userRoutes.js";
import cookieParser from "cookie-parser";
import captainRoutes from "./routers/captainRoutes.js";

// MODULE CONFIGUERS
const app = express();
dotenv.config();
app.use(cors());

// FOR PERSING DATA WITH DATAPARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ENVOIMENTAL VARIABLES
let port = process.env.PORT;
let dbString = process.env.DBSTRING;

//DB CONNECTION
connectToDb(dbString);

//ROUTES
app.use("/users",userRoutes);
app.use("/captains",captainRoutes);

//SERVER
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
