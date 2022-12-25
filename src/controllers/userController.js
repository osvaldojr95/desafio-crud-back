import { userServices } from "../services/userServices.js";
dotenv.config();

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
  const { username } = req.body;
  await userServices.signOutUser(username);
  res.sendStatus(200);
}