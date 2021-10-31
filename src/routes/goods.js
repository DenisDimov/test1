import Router from "express";

const routerGoods = Router();

routerGoods.get("/goods");
routerGoods.post("/goods");
routerGoods.get("/goods/:id");
routerGoods.delete("/goods/:id");

export default routerGoods;
