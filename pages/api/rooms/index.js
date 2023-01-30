import nc from "next-connect";
import dbconnect from "../../../config/dbconnect";

import { allRooms, newRoom } from "@/controllers/roomControler";

dbconnect();

const handler = nc();
handler.get(allRooms);
handler.post(newRoom)

export default handler;
