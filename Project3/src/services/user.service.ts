import { UserModel } from "../models/user.model";

const createUserService = async(name : string, email : string, password : string) : Promise<any> => {

    const newUser = await UserModel.create({
        name : name,
        email : email,
        password : password
    })
    
    if(!newUser) throw new Error('error')
    else return newUser

}



export {createUserService}