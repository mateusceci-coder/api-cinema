import { Router } from "express";
import { makeCreateUserController } from "../factories/user";

export default (router: Router): void => {
  router.post("/users", async (req, res) => {
    const createUserController = makeCreateUserController();

    const { statusCode, body } = await createUserController.handle(req);

    res.status(statusCode).json(body);
  });
};
