import * as express from "express";
import { IUserForResponseDTO, IUserForTokenDTO } from "../index";
import * as User from "../index";

export const register: express.RequestHandler = async (
  request,
  response,
  next
) => {
  const { email, firstName, lastName, password } = request.body;

  try {
    const userFromDatabase = await User.Model.create({
      email,
      firstName,
      lastName,
      password
    });

    const { id } = userFromDatabase;
    const userData: IUserForTokenDTO = { firstName, lastName, email, id };
    const token = User.Model.createToken(userData);
    const user: IUserForResponseDTO = { ...userData, token };

    response.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const login: express.RequestHandler = async (
  request,
  response,
  next
) => {
  const { email, password } = request.body;

  try {
    const userFromDatabase = await User.Model.findByEmail(email);

    if (!userFromDatabase) {
      throw new Error("User does not exist");
    }

    const isPasswordValid = await User.Model.validatePassword(
      password,
      userFromDatabase.hash
    );

    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }

    const { firstName, lastName, id } = userFromDatabase;
    const userData: IUserForTokenDTO = { firstName, lastName, email, id };
    const token = User.Model.createToken(userData);
    const user: IUserForResponseDTO = { ...userData, token };

    response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};
