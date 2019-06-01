import { config } from "./config";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { ConnectionOptions, createConnection } from "typeorm";

createConnection({ ...(config.database as ConnectionOptions) })
  .then(async connection => {
    const app = createExpressServer({
      controllers: [UserController]
    });

    app.listen(4000);

    console.log("Express application is up and running on port 4000");
  })
  .catch(error => console.log(error));
