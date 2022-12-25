import { annotationServices } from "../services/annotationServices.js";

export async function create(req, res) {
  const { userId } = res.locals.body;
  const { text } = req.body;
  await annotationServices.create(userId, text);
  res.sendStatus(201);
}

export async function listAll(req, res) {
  const { userId } = res.locals.body;
  const list = await annotationServices.listAll(userId);
  res.send(list);
}

export async function edit(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  await annotationServices.edit(id, text);
  res.sendStatus(204);
}

export async function remove(req, res) {
  const { id } = req.params;
  await annotationServices.remove(id);
  res.sendStatus(204);
}
