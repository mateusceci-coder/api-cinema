import { Movie } from "../../domain/movie";

import { CreateMovieParams } from "../../domain/movie";
import { CreateMovieRepository } from "../../repositories/movie/create-movie";

export interface CreateMovieUseCase {
  handle(createMovieParams: CreateMovieParams): Promise<Movie>;
}

export class CreateMovieUseCase {
  constructor(private readonly createMovieRepository: CreateMovieRepository) {}

  async handle(createMovieParams: CreateMovieParams): Promise<Movie> {
    return await this.createMovieRepository.add(createMovieParams);
  }
}
