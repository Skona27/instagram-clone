import * as express from "express";
import { ResponseError } from "../../Error";
import { createUser } from "../index";

export const register: express.RequestHandler = async (
  request,
  response,
  next
) => {
  const { email, firstName, lastName, password } = request.body;

  try {
    const user = await createUser({ email, firstName, lastName, password });
    response.status(201).json(user);
  } catch {
    const error = new ResponseError(500, "Error while creating new user");
    next(error);
  }
};
