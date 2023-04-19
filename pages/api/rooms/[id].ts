import nc from "next-connect";

import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "@/controllers/roomController";
import { connect } from "./../../../utils/dbconnect";

const handler = nc();
connect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
