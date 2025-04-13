import { JoiAdapter } from "../adapters/joi";
import { CreateUserController } from "../controller/user/create-user";
import { CreateUserRepository } from "../repositories/user/create-user";
import { GetUserByEmailRepository } from "../repositories/user/get-user-by-email";
import { CreateUserUseCase } from "../use-cases/user/create-user";

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository();
  const getUserByEmailRepository = new GetUserByEmailRepository();
  const createUserUseCase = new CreateUserUseCase(
    createUserRepository,
    getUserByEmailRepository
  );

  const joiAdapter = new JoiAdapter();

  const createUserController = new CreateUserController(
    createUserUseCase,
    joiAdapter
  );

  return createUserController;
};
