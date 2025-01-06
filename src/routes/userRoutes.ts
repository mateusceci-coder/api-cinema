import { Router } from "express";

export default (router: Router): void => {
  router.get("/users", (req, res) => {
    res.json({ message: "Hello, world!" });
  });
};
