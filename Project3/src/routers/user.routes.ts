import express from 'express';
import { UserController } from '../controllers/UserController';


const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/', userController.createUser.bind(userController))


export {userRouter}