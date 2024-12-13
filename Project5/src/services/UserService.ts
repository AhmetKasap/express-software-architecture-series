import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/UserRepository";

@injectable()
export class UserService {

  private userRepository : UserRepository

  constructor(@inject(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(name: string, email: string, password: string): Promise<any> {
    
    const newUser = await this.userRepository.create(name,email,password)
    if (!newUser) throw new Error('Error creating user');
    return newUser;
    
  }
}
