import { JoiAdapter } from "../adapters/joi";
import { CreateMovieController } from "../controller/movie/create-movie";
import { CreateMovieRepository } from "../repositories/movie/create-movie";
import { CreateMovieUseCase } from "../use-cases/movie/create-user";

export const makeCreateMovieController = () => {
  const createMovieRepository = new CreateMovieRepository();
  const createMovieUseCase = new CreateMovieUseCase(createMovieRepository);

  const joiAdapter = new JoiAdapter();

  const createMovieController = new CreateMovieController(
    createMovieUseCase,
    joiAdapter
  );

  return createMovieController;
};
