import { Server } from "http";import socket from "socket.io";
import { message } from "../../prisma/client";
import { makeLoadRoomController } from "../factory/controller/chat/loadRoom";

const roomController = makeLoadRoomController();

export default (server: Server) => {
  const io = new socket.Server(server, {
    cors: {
      origin: "http://127.0.0.1:5173",
      methods: "*",
    },
  });
  io.on("connect", (socket) => {

    socket.on("disconnect", () => {
      console.log(`User desconnected ${socket.id}`);
    });
    
    socket.on("join_room", async (data) => {
      const roomUser = await roomController.handle({
        follower: data.followerId,
        userId: data.userId,
      });
      const id = roomUser.body as string;
      if (id) socket.join(id);
    });

    socket.on("send_message", async (data) => {
      await message.create({
        data: {
          message: data.message,
          userSend: data.userSend,
          userRec: data.to,
        },
      });
      socket.to(data.room).emit("receive_message", data);
    });
  });
};
