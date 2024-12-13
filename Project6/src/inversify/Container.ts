import { Container } from "inversify";
import { IUserRepository } from "../api/repositories/interfaces/IUserRepository";
import { UserRepository } from "../api/repositories/UserRepository";
import { IUserService } from "../api/services/interfaces/IUserService";
import { UserService } from "../api/services/UserService";
import { UserController } from "../api/controllers/UserController";
import TYPES from "./tpyes";

const container = new Container()

container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);


export { container }
