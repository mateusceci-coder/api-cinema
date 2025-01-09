import prisma from "../../config/db/prisma";
import { User } from "../../domain/user";

export class GetUserByEmailRepository {
  async getByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
