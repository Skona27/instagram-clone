import * as express from "express";
const app = express();

app.get("/", (_request: express.Request, response: express.Response) => {
  response.send({ text: "Hello from Express!" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});
