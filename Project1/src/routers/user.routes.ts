import express, { Request, Response, Router } from 'express';

const userRouter = express.Router()

import { createUser } from '../controllers/user.controller';


userRouter.post('/', createUser)


export {userRouter}