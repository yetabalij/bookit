import type { NextApiRequest, NextApiResponse } from "next";
import Room from "./../models/rooms";

const allRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//Create new room => /api/rooms
const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  const room = await Room.create(req.body);
  try {
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//get single room => /api/rooms:id
const getSingleRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "room not found.",
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//update room => /api/rooms:id
const updateRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "room not found.",
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//delete room => /api/rooms:id
const deleteRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "room not found.",
      });
    }

    await Room.findByIdAndDelete(req.query.id);

    res.status(200).json({
      success: true,
      message: "Room is deleted.",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
