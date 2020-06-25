import "./config";
import Server from "./server/server";

export const server = Server.init((process.env.PORT as unknown) as number);

server.start(() =>
  console.log(`Server is running at PORT: ${process.env.PORT}`)
);
