import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import { ErrorRequestHandler, RequestNotFound } from "./Error";
import * as User from "./User";

const app: express.Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user", User.Routes);

app.use(RequestNotFound);
app.use(ErrorRequestHandler);

// I don't like this, if anyone know how to set
// compiler options in tsconfig.json, please feel free to change it.
// TODO - change it to default export
module.exports = app;
