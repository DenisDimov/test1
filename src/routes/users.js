import Router from "express";

const router = Router();

router.post("/user/login");
router.post("/user/register");
router.post("/user/logout");
router.patch("/user");
router.get("/user");

export default router;
