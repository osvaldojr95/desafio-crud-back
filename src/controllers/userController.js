import { userServices } from "../services/userServices.js";

export async function signUp(req, res) {
  const { username, email, password } = req.body;
  await userServices.createUser({ username, email, password });
  res.sendStatus(201);
}

export async function signIn(req, res) {
  const { email, password } = req.body;
  const userToken = await userServices.signInUser(email, password);
  res.send(userToken);
}

export async function signOut(req, res) {
  const { userId } = res.locals.body;
  await userServices.signOutUser(userId);
  res.sendStatus(200);
}