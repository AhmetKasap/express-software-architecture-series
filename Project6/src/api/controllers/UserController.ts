import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserService } from "../services/UserService";
import { IUserService } from "../services/interfaces/IUserService";
import TYPES from "../../inversify/tpyes";

@injectable()
export class UserController {
  constructor(@inject(TYPES.UserService) private readonly userService: IUserService) {}

  public async createUser(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body
    
    const result = await this.userService.createUser(name, email, password)
    res.json(result)
  }
}
