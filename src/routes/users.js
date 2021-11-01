import Router from "express";

import Users from "../controllers/users.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/user/login", Users.login);
router.post("/user/register", Users.register);
router.patch("/user", authMiddleware, Users.updateUser);
router.get("/user", authMiddleware, Users.getUser);

export default router;
