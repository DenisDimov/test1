import express from "express";
import mongoose from "mongoose";

const PORT = 4000;

const app = express();

app.use(express.json());


app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("сервер работает");
});

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`Сервер стартует на ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startApp();
