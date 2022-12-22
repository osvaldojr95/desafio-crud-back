import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await db.collection("test").insertOne({ id: 1, name: "test" });
    return res.sendStatus(201);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

export default router;
