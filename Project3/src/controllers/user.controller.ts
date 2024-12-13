import { Request, Response } from "express";

import { createUserService } from "../services/user.service";

const createUser = async(req : Request, res : Response) :Promise<any> =>   {
    const {name,email,password} = req.body

    const result = await createUserService(name, email, password)
    if(result) return res.json(result)
    
}



export {createUser}