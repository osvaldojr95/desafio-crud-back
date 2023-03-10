import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";
import { userRepository } from "../repositories/userRepository.js";
dotenv.config();

async function createUser(user) {
  const userExist = await userRepository.findByUser(user.username);
  if (userExist) {
    throw { text: "username", status: 409 };
  }

  const emailExist = await userRepository.findByEmail(user.email);
  if (emailExist) {
    throw { text: "email", status: 409 };
  }

  const encryptedPassword = bcrypt.hashSync(
    user.password,
    parseInt(process.env.HASH)
  );
  await userRepository.create({ ...user, password: encryptedPassword });
}

async function signInUser(email, password) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw { text: "", status: 404 };
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw { text: "", status: 401 };
  }

  await userRepository.signOut(user._id);

  const token = uuid();
  await userRepository.signIn(user, token);
  return { user: user.username, token };
}

async function signOutUser(idUser) {
  await userRepository.signOut(idUser);
}

async function findByToken(token) {
  const session = await userRepository.findSession(token);
  if (!session) {
    throw { text: "User not logged", status: 401 };
  }

  const user = await userRepository.findById(session.userId);
  if (!user) {
    throw { text: "", status: 404 };
  }

  return user;
}

export const userServices = {
  createUser,
  signInUser,
  signOutUser,
  findByToken,
};
