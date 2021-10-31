import express from "express";
import mongoose from "mongoose";

import router from "./src/routes/users.js";
import routerGoods from "./src/routes/goods.js";
import { MONGO_URL, MONGO_PORT } from "./config.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api/v1", router);
app.use("/api/v1", routerGoods);

async function startApp() {
  try {
    await mongoose.connect(`${MONGO_URL}:${MONGO_PORT}/test1`, {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Сервер стартует на ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startApp();
