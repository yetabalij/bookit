import nc from "next-connect";

import { allRooms, newRoom } from "@/controllers/roomController";
import { connect } from "./../../../utils/dbconnect";

const handler = nc();
connect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
