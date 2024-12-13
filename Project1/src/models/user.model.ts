import mongoose, { Schema, Document, Types } from "mongoose";

const userSchema : Schema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required :true},
    password : {type : String, required :true}
})

export const UserModel = mongoose.model('USERS', userSchema)