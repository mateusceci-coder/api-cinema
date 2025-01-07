import { JoiAdapter } from "../adapters/joi";
import { CreateUserController } from "../controller/create-user";
import { CreateUserRepository } from "../repositories/user/create-user";
import { CreateUserUseCase } from "../use-cases/user/create-user";

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository();

  const createUserUseCase = new CreateUserUseCase(createUserRepository);

  const joiAdapter = new JoiAdapter();

  const createUserController = new CreateUserController(
    createUserUseCase,
    joiAdapter
  );

  return createUserController;
};
