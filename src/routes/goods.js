import Router from "express";
import Goods from "../controllers/goods.js";

const routerGoods = Router();

routerGoods.get("/goods", Goods.getAll);
routerGoods.post("/goods", Goods.create);
routerGoods.get("/goods/:id", Goods.getOne);
routerGoods.delete("/goods/:id", Goods.delete);

export default routerGoods;
