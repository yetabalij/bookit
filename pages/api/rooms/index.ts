import nc from "next-connect";

import { allRooms } from "@/pages/controllers/roomController";
import mongoose from "mongoose";

//db connection
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ermias:ermias@cluster0.t7j5vim.mongodb.net/bookit?retryWrites=true&w=majority"
    );
    console.log("connect to db.");
  } catch (error) {
    throw error;
  }
};

const handler = nc();
connect();

handler.get(allRooms);

export default handler;
