import express from "express";
import {
  create,
  edit,
  listAll,
  remove,
} from "../controllers/annotationController.js";
import { annotationValidation } from "../middlewares/annotationValidations.js";
import { tokenValidadion } from "../middlewares/tokenValidations.js";

const router = express.Router();
router.post("/create", tokenValidadion, create);
router.put("/:id/edit", annotationValidation, tokenValidadion, edit);
router.get("/listAll", tokenValidadion, listAll);
router.delete("/:id/remove", tokenValidadion, remove);

export default router;
