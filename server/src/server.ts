import { Application } from "express";
import { Server } from "http";
import createApp from "@/app";
import * as dotenv from "dotenv";
dotenv.config();

const app: Application = createApp();
const PORT: string = process.env.PORT as string;

const server: Server = app.listen(PORT, () =>
  console.log(`Server is running at ${PORT} 🚀🚀🚀`)
);
