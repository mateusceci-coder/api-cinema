import { User } from "../../domain/user";
import { CreateUserParams } from "../../domain/user";
import { EmailAlreadyInUseError } from "../../errors/user";
import { CreateUserRepository } from "../../repositories/user/create-user";
import { GetUserByEmailRepository } from "../../repositories/user/get-user-by-email";

export interface CreateUserUseCase {
  handle(createUserParams: CreateUserParams): Promise<User>;
}

export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly getUserByEmailRepository: GetUserByEmailRepository
  ) {}

  async handle(createUserParams: CreateUserParams): Promise<User> {
    const user = await this.getUserByEmailRepository.getByEmail(
      createUserParams.email
    );

    if (user) {
      throw new EmailAlreadyInUseError(user.email);
    }

    return await this.createUserRepository.add(createUserParams);
  }
}
