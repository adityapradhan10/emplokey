import { NextFunction, Request, Response } from "express";
import { validationResult, ValidationError, Result } from "express-validator";
import createHttpError from "http-errors";

export default (req: Request, res: Response, next: NextFunction): void => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    next(createHttpError.UnprocessableEntity(errors.array()[0].msg));
  } else {
    next();
  }
};
