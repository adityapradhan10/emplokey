import express, { Router, Request, Response } from "express";
import { check } from "express-validator";
import { handleUserLogin } from "@/controllers/auth.controller";
import validator from "@/middlewares/validator";

const router: Router = express.Router();

router.post(
  "/",
  check("email").trim().isEmail().withMessage("Please provide a valid email"),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password should be at least 6 character long"),
  validator,
  handleUserLogin
);

export default router;
