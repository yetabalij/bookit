import mongoose from "mongoose";

const dbconnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log("Db connected successfully"));
};

export default dbconnect;
