import { User } from "../../domain/user";
import prisma from "../../config/db/prisma";
import { CreateUserParams } from "../../domain/user";

export interface CreateUserRepository {
  add(createUser: CreateUserParams): Promise<User>;
}

export class CreateUserRepository {
  async add(createUser: CreateUserParams): Promise<User> {
    const user = await prisma.user.create({
      data: createUser,
    });

    return user;
  }
}
