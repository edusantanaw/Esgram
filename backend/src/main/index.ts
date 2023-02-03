const Port = process.env.PORT || 5001;
import http from "http";
import express from "express";
import cors from "cors";
import router from "./routes/router";
import socket from "./socket/socket";
export const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);
const httpServer = http.createServer(app);
socket(httpServer);

httpServer.listen(Port, (): void => {
  console.log(`Server is running on port:${Port}`);
});
