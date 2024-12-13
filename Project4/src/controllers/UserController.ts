import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserService } from "../services/UserService";

@injectable()
export class UserController {
  private userService: UserService;

  constructor(@inject(UserService) userService: UserService) {
    this.userService = userService;
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body
    
    const result = await this.userService.createUser(name, email, password)
    console.log(result)
    res.json(result)
  }
}
