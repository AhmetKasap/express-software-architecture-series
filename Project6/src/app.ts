import express, { Request, Response } from 'express';
import "reflect-metadata"; 


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

//!Database Connection
import { mongoDbConnection } from './config/db.connection';
mongoDbConnection()

//! routers
import { userRouter } from './api/routers/user.routes';
app.use('/users', userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})