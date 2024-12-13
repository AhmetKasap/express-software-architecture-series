import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

//!Database Connection
import { mongoDbConnection } from './config/db.connection';
mongoDbConnection()

//! routers
import { userRouter } from './routers/user.routes';
app.use('/users', userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})