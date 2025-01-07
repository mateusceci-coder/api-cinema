import { JoiAdapterProps } from "../adapters/joi";
import { createUserSchema } from "../schemas/userSchema";
import { CreateUserUseCase } from "../use-cases/user/create-user";
import { Request } from "express";
import { badRequest, created, CreatedResponse } from "./helpers/http";

export class CreateUserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly joiAdapter: JoiAdapterProps
  ) {}

  async handle(req: Request): Promise<CreatedResponse> {
    try {
      const params = req.body;

      await this.joiAdapter.validateSchema(createUserSchema, params);

      const createdUser = await this.createUserUseCase.handle(params);

      return created(createdUser);
    } catch (error) {
      if (error instanceof Error) {
        return badRequest({ error: error.message });
      }

      console.error(error);
      return badRequest({ error: "An unknown error occurred" });
    }
  }
}
