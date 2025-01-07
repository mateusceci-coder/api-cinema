import { User } from "../../domain/user";
import { CreateUserParams } from "../../domain/user";
import { CreateUserRepository } from "../../repositories/user/create-user";

export interface CreateUserUseCase {
  handle(createUserParams: CreateUserParams): Promise<User>;
}

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async handle(createUserParams: CreateUserParams): Promise<User> {
    return await this.createUserRepository.add(createUserParams);
  }
}
