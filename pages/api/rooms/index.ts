import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { allRooms } from "@/controllers/roomControler";

const handler = nc<NextApiRequest, NextApiResponse>();
handler.get(allRooms);

export default handler;
