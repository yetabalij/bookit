import nc from "next-connect";

import { allRooms } from "@/pages/controllers/roomController";

const handler = nc();

handler.get(allRooms);

export default handler;
