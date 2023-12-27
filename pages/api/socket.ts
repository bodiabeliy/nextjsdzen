import type { Server as HTTPServer } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Socket as NetSocket } from 'net'
import { Server, type Server as IOServer } from 'socket.io'

enum UserEventNameEnum {
  userEvent = "users",

}
interface SocketServer extends HTTPServer {
  io?: IOServer
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}
export default function SocketHandler(_:NextApiRequest, res:NextApiResponseWithSocket) {
  if (res.socket.server.io) {
    return 
  } else {
    const io = new Server<SocketServer >(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket:any) => {
        socket.broadcast.emit(UserEventNameEnum.userEvent, (io.engine.clientsCount));
        socket.on('disconnect', () => {
          socket.broadcast.emit(UserEventNameEnum.userEvent, (io.engine.clientsCount));

        });
    });
  }
  res.end();
}
