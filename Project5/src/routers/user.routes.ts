import express from "express";
import { container } from "../inversify/Container";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();

const userController = container.get(UserController);

userRouter.post("/", (req, res) => userController.createUser(req, res));

export { userRouter };
