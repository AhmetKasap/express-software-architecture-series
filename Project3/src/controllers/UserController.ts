import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async createUser(req: Request, res: Response): Promise<any> {
    const { name, email, password } = req.body;

    const result = await this.userService.createUser(name, email, password);
    
    return res.json(result);
  }


}
