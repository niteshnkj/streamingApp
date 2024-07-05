// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

dotenv.config({
  path: "./",
});

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
