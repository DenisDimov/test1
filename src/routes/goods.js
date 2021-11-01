import Router from "express";

import Goods from "../controllers/goods.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const routerGoods = Router();

routerGoods.get("/goods", roleMiddleware([false, true]), Goods.getAll);
routerGoods.post("/goods", roleMiddleware([false, true]), Goods.create);
routerGoods.get("/goods/:id", roleMiddleware([false, true]), Goods.getOne);
routerGoods.delete("/goods/:id", roleMiddleware([false, true]), Goods.delete);

export default routerGoods;
