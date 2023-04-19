import nc from "next-connect";

import { getSingleRoom } from "@/controllers/roomController";
import { connect } from "./../../../utils/dbconnect";

const handler = nc();
connect();

handler.get(getSingleRoom);

export default handler;
