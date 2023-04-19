import mongoose from "mongoose";
const uri = process.env.DATABASE;
//db connection
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connect to db.");
  } catch (error) {
    throw error;
  }
};

export { connect };
