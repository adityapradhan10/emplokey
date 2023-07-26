import { NextFunction, Request, Response } from "express";
import { RegisterUserPayload } from "@/common/interfaces";
import createHttpError from "http-errors";
import UserService from "@/services/users.service";
import BASE_CONST from "@/common/constants";
import MillService from "@/services/mill.service";

// @desc      Register user
// @route     POST /api/v1/user
// @access    Public
export const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data: RegisterUserPayload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const userResult = await new UserService().createUser(data);
    const millResult = await new MillService().createMill({
      name: req.body.millName,
      managerId: userResult,
    });
    res.status(201).json({
      result: {
        status: 201,
        payload: {
          user_id: userResult,
          mill_id: millResult,
        },
      },
    });
  } catch (error: any) {
    if (error.message === BASE_CONST.ERROR.USER_EXISTS) {
      next(createHttpError.BadRequest(BASE_CONST.ERROR.USER_EXISTS));
    } else {
      console.error(error);
      next(createHttpError.InternalServerError());
    }
  }
};
