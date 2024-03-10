import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to data base successfully");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to data base  ${err}`);
    });
};
