import { User } from "../../domain/user";
import { GetUserByEmailUseCase } from "../../use-cases/user/get-user-by-email";
import { badRequest, HttpResponse, notFound, ok } from "../helpers/http";
import { Request } from "express";

export class GetUserByEmailController {
  constructor(private readonly getUserByEmailUseCase: GetUserByEmailUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { email } = req.params;

      const user = await this.getUserByEmailUseCase.handle(email);

      if (!user) {
        return notFound({ error: "User not found" });
      }

      return ok(user);
    } catch (error) {
      if (error instanceof Error) {
        return badRequest({ error: error.message });
      }

      return badRequest({ error: "An unknown error occurred" });
    }
  }
}
