import { Container } from "inversify";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";

const container = new Container();

container.bind(UserService).toSelf();
container.bind(UserController).toSelf();

export { container };
