import { injectable } from "inversify";
import { UserModel } from "../models/user.model";

@injectable()
export class UserService {
  public async createUser(name: string, email: string, password: string): Promise<any> {
    
    const newUser = await UserModel.create({ name, email, password });
    if (!newUser) throw new Error('Error creating user');
    return newUser;
    
  }
}
