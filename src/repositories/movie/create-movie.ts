import { Movie } from "@prisma/client";
import prisma from "../../config/db/prisma";
import { CreateMovieParams } from "../../domain/movie";

export class CreateMovieRepository {
  async add(createMovie: CreateMovieParams): Promise<Movie> {
    const movie = await prisma.movie.create({
      data: createMovie,
    });

    return movie;
  }
}
