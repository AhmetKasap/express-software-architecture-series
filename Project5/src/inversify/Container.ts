import { Container } from "inversify";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";

const container = new Container()

container.bind(UserService).toSelf()
container.bind(UserController).toSelf()
container.bind(UserRepository).toSelf()

export { container }
