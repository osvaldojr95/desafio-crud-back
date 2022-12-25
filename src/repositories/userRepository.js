import { ObjectId } from "mongodb";
import db from "../config/db.js";

async function findByUser(username) {
  return await db.collection("users").findOne({ username: username });
}

async function findByEmail(email) {
  return await db.collection("users").findOne({ email });
}

async function create(user) {
  await db.collection("users").insertOne(user);
}

async function signIn(user, token) {
  await db
    .collection("sessions")
    .insertOne({ userId: user._id, session: token });
}

async function signOut(userId) {
  await db.collection("sessions").deleteMany({ userId: ObjectId(userId) });
}

async function findById(id) {
  return await db.collection("users").findOne({ _id: ObjectId(id) });
}

async function findSession(token) {
  return await db.collection("sessions").findOne({ session: token });
}

export const userRepository = {
  create,
  findByUser,
  findByEmail,
  signIn,
  signOut,
  findById,
  findSession,
};
