import * as express from "express";
import * as morgan from "morgan";

const app: express.Application = express();

app.use(morgan("dev"));

app.get("/", (_request: express.Request, response: express.Response) => {
  response.send({ text: "Hello from Express!" });
});

// I don't like this, if anyone know how to set
// compiler options in tsconfig.json, please feel free to change it.
// TODO - change it to default export
module.exports = app;
