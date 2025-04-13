import Joi from "joi";

export const createMovieSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  minimumAge: Joi.number().integer().min(0).max(120).optional(),
});
