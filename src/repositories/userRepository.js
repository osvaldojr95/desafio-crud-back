import { ObjectId } from "mongodb";
import db from "../config/db.js";
dotenv.config();

async function findByUser(username) {
  const user = await db.collection("users").findOne({ username: username });
  return user;
}

async function findByEmail(email) {
  const user = await db.collection("users").findOne({ email });
  return user;
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

export const userRepository = {
  create,
  findByUser,
  findByEmail,
  signIn,
  signOut,
};
