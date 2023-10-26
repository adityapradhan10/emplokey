import express, { Application, Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import auth from "@/routes/auth.route";
import user from "@/routes/user.route";
import errorHandler from "@/middlewares/error";

export default (): Application => {
  const app: Application = express();

  app.use(express.json());
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);

  app.use((req: Request, res: Response, next: NextFunction): void => {
    next(createHttpError.NotFound());
  });

  app.use(errorHandler);

  return app;
};
