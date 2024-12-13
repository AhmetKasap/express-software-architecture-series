import { injectable } from "inversify";
import { IUserRepository } from "./interfaces/IUserRepository";
import { UserEntity } from "../entities/UserEntity";
import { UserModel } from "../models/user.model";

@injectable()
export class UserRepository implements IUserRepository {

    async create(user : UserEntity): Promise<UserEntity> {
        return UserModel.create(user);
    }

}