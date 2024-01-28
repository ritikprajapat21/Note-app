import express from "express";
import router from "./router/index.js";
import connect from "./db/index.js";

const app = express();

// Settting the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");

app.use("/", router);

connect()
  .then(() => {
    app.listen(3001, () => {
      console.log("App listening on port 3001");
    });
  })
  .catch((err) => {
    console.log("Cannot connect to db");
    console.error(err);
  });
