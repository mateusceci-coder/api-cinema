import { CreateUserRepository } from "../../repositories/user/create-user";

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}
}
