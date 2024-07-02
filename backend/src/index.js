// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB();

dotenv.config({
    path:'./'
})









/*
(async () => {
  try {
    mongoose.connect(`${procees.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(procees.env.PORT, () => {
      console.log(`App is listening on the port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();
// function connectDB(){}
// connectDB()
*/
