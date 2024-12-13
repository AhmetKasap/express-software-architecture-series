import { inject, injectable } from "inversify";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { UserEntity } from "../entities/UserEntity";
import { IUserService } from "./interfaces/IUserService";
import TYPES from "../../inversify/tpyes";

@injectable()
export class UserService implements IUserService {

  constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) {}


  public async createUser(name: string, email: string, password: string): Promise<any> {
    const userEntity = new UserEntity(name, email, password);
    
    const newUser = await this.userRepository.create(userEntity);
    if (!newUser) throw new Error('Error creating user');
    return newUser;
  }
}
