import express from "express";
import {
  create,
  edit,
  listAll,
  remove,
} from "../controllers/annotationController.js";

const router = express.Router();
router.post("/create", create);
router.update("/edit", edit);
router.get("/listAll", listAll);
router.delete("/remove", remove);

export default router;
