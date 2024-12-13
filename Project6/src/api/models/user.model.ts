import mongoose, { Schema, Document, Types } from "mongoose";
import { UserEntity } from "../entities/UserEntity";

const userSchema : Schema = new mongoose.Schema<UserEntity>({
    name : {type : String, required : true},
    email : {type : String, required :true},
    password : {type : String, required :true}
})

export const UserModel = mongoose.model<UserEntity>('USERS', userSchema)