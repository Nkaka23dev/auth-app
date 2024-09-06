import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("Connection established successfully");
    });

    connection.on("error", (err) => {
      console.log("Connection failed", err);
    });
  } catch (e) {
    console.log("Something went wrong", e);
  }
}
