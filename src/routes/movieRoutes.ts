import { Router } from "express";
import { makeCreateMovieController } from "../factories/movie";

export default (router: Router): void => {
  router.post("/movies", async (req, res) => {
    const createMovieController = makeCreateMovieController();

    const { statusCode, body } = await createMovieController.handle(req);

    res.status(statusCode).json(body);
  });
};
