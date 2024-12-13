import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

const createUser = async(req : Request, res : Response) :Promise<any> =>   {
    const {name,email,password} = req.body

    const newUser = await UserModel.create({
        name : name,
        email : email,
        password : password
    })
    
    if(!newUser) throw new Error('error')
    else return res.json({newUser})
}



export {createUser}