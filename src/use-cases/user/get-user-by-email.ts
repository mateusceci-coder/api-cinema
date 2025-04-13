import { User } from "../../domain/user";
import { GetUserByEmailRepository } from "../../repositories/user/get-user-by-email";

export interface GetUserByEmailUseCase {
  handle(email: string): Promise<User>;
}

export class GetUserByEmailUseCase {
  constructor(
    private readonly getUserByEmailRepository: GetUserByEmailRepository
  ) {}

  async handle(email: string): Promise<User | null> {
    const user = await this.getUserByEmailRepository.getByEmail(email);

    return user;
  }
}
