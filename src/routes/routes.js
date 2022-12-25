import express from "express";
import userRoutes from "./userRoutes.js";
import annotationRoutes from "./annotationRoutes.js";

const router = express.Router();
router.use(userRoutes);
router.use(annotationRoutes);

export default router;
