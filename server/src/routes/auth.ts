import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "BE setup" });
});

export default router;
