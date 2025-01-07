import prisma from "../../config/db/prisma";

export interface CreateUserParams {
  name: string;
  email: string;
  age: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

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
