import express, { Router } from "express";
import { check } from "express-validator";
import { handleCreateUser } from "@/controllers/users.controller";
import validator from "@/middlewares/validator";

const router: Router = express.Router();

router.route("/").post(
  check("firstName")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage("Please provide first name in string format"),
  check("lastName")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage("Please provide last name in string format"),
  check("millName")
    .trim()
    .notEmpty()
    .withMessage("Please provide mill name in string format"),
  check("email").trim().isEmail().withMessage("Please provide a valid email"),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password should be at least 6 character long"),
  validator,
  handleCreateUser
);

export default router;
