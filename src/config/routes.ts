import { Express, Router } from "express";
import userRoutes from "../routes/userRoutes";
import movieRoutes from "../routes/movieRoutes";

export default (app: Express): void => {
  const router = Router();
  userRoutes(router);
  movieRoutes(router);
  app.use("/api", router);
};
