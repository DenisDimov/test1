import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./src/routes/users.js";
import routerGoods from "./src/routes/goods.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/v1", router);
app.use("/api/v1", routerGoods);

async function startApp() {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}:${process.env.MONGO_PORT}/test1`, {
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
