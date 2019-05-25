import * as express from "express";
import { ResponseError } from "../../Error";
import { IUserForResponseDTO, IUserForTokenDTO } from "../index";
import * as User from "../index";

export const register: express.RequestHandler = async (
  request,
  response,
  next
) => {
  const { email, firstName, lastName, password } = request.body;
  const databaseResponse = await User.Model.create({
    email,
    firstName,
    lastName,
    password
  });

  if (!databaseResponse.error && databaseResponse.data) {
    const { id } = databaseResponse.data;
    const userData: IUserForTokenDTO = { firstName, lastName, email, id };
    const token = User.Model.createToken(userData);
    const user: IUserForResponseDTO = { ...userData, token };
    response.status(201).json(user);
  }

  if (databaseResponse.error && databaseResponse.error.status === 1062) {
    next(new ResponseError(500, "User already exists"));
  }
};

export const login: express.RequestHandler = async (
  request,
  response,
  next
) => {
  const { email, password } = request.body;
  const databaseResponse = await User.Model.findByEmail(email);

  if (!databaseResponse.error && databaseResponse.data) {
    const { hash, lastName, firstName, email, id } = databaseResponse.data;
    const isPasswordValid = await User.Model.validatePassword(password, hash);

    if (!isPasswordValid) {
      next(new ResponseError(500, "Incorrect password"));
      return;
    }

    const token = User.Model.createToken({ firstName, lastName, email, id });
    const user: IUserForResponseDTO = { id, firstName, lastName, email, token };
    response.status(200).json(user);
  }

  if (databaseResponse.error && databaseResponse.error.status === 1) {
    next(new ResponseError(500, "User does not exist"));
  }
};
