import app from "../app";
import { connect, set } from "mongoose";
export default class Server {
  public port: number;

  constructor(port: number) {
    this.port = port;
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    //Start the app
    this.connect()
      .then(() => {
        console.log("Connection to Mongo Atlas was successful");
        app.listen(this.port, callback);
      })
      .catch((err) => console.error(err));
  }

  private async connect() {
    return await connect(process.env.DB as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
