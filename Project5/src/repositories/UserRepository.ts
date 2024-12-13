import { injectable } from "inversify";
import { UserModel } from "../models/user.model";

@injectable()
export class UserRepository {
  public async create(name: string, email: string, password: string): Promise<any> {
    return await UserModel.create({ name, email, password });
  }

  
}
