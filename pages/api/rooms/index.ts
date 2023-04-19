import nc from "next-connect";

import { allRooms, newRoom } from "@/controllers/roomController";
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

//routes
const handler = nc();
connect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
