import * as express from "express";
import { register } from "../controllers";

export const routes = express.Router();

routes.post("/register", register);
