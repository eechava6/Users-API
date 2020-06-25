import { config } from "dotenv";
import { resolve } from "path";
import { ENV } from "./constants/env.constant";

switch (process.env.NODE_ENV) {
  case ENV.LOCAL:
  default:
    config({
      path: resolve(__dirname, "../.env"),
    });
    break;

  case ENV.PRODUCTION:
    config({
      path: resolve(__dirname, "../production.env"),
    });
    break;
}
