import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export default (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(error.status || 500);
  res.send({
    result: {
      status: error.status || 500,
      payload: {
        message: error.message,
      },
    },
  });
};
