import { ObjectId } from "mongodb";
import db from "../config/db.js";

async function create(userId, text) {
  await db.collection("annotations").insertOne({ userId, text });
}

async function listAll(userId) {
  return await db.collection("annotations").find({ userId: userId }).toArray();
}

async function findById(id) {
  return await db.collection("annotations").findOne({ _id: ObjectId(id) });
}

async function remove(id) {
  return await db.collection("annotations").deleteOne({ _id: ObjectId(id) });
}

async function edit(id, text) {
  await db
    .collection("annotations")
    .updateMany({ _id: ObjectId(id) }, { $set: { text } });
}

export const annotationRepository = {
  create,
  listAll,
  findById,
  edit,
  remove,
};
