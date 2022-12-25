import { userServices } from "../services/userServices.js";

export async function tokenValidadion(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();

  if (!token) {
    throw { text: "tokenNotFound", status: 401 };
  }

  const user = await userServices.findByToken(token);
  res.locals.body = { userId: user._id };

  next();
}
