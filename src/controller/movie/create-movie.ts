import { JoiAdapterProps } from "../../adapters/joi";
import { createMovieSchema } from "../../schemas/movieSchema";
import { CreateMovieUseCase } from "../../use-cases/movie/create-user";
import { badRequest, HttpResponse, created } from "../helpers/http";
import { Request } from "express";
export class CreateMovieController {
  constructor(
    private readonly createMovieUseCase: CreateMovieUseCase,
    private readonly joiAdapter: JoiAdapterProps
  ) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const params = req.body;

      await this.joiAdapter.validateSchema(createMovieSchema, params);

      const createdMovie = await this.createMovieUseCase.handle(params);

      return created(createdMovie);
    } catch (error) {
      if (error instanceof Error) {
        return badRequest({ error: error.message });
      }

      console.error(error);
      return badRequest({ error: "An unknown error occurred" });
    }
  }
}
