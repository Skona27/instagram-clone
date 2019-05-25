import * as express from "express";
import * as User from "../index";

export const router = express.Router();

router.post("/register", User.Controller.register);
router.post("/login", User.Controller.login);
