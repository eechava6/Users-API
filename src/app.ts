import "reflect-metadata";
import express from "express";
import { resolve } from "path";
import { createExpressServer } from "routing-controllers";

const app: express.Application = createExpressServer({
  cors: true,
  controllers: [resolve(__dirname, "./controllers/**/*{.ts,.js}")],
});

export default app;
