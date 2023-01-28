import nc from "next-connect";
import dbconnect from "../../../config/dbconnect";

import { allRooms } from "@/controllers/roomControler";

dbconnect();

const handler = nc();
handler.get(allRooms);

export default handler;
