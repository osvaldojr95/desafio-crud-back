import { ObjectId } from "mongodb";
import { annotationRepository } from "../repositories/annotationRepository.js";

async function create(userId, text) {
  await annotationRepository.create(userId, text);
}

async function listAll(userId) {
  return await annotationRepository.listAll(userId);
}

async function edit(id, text) {
  const annotation = await annotationRepository.findById(id);
  if (!annotation) {
    throw { text: "annotationNotFound", staus: 404 };
  }

  return await annotationRepository.edit(id, text);
}

async function remove(id) {
  const annotation = await annotationRepository.findById(id);
  if (!annotation) {
    throw { text: "annotationNotFound", staus: 404 };
  }

  return await annotationRepository.remove(id);
}

export const annotationServices = {
  create,
  listAll,
  edit,
  remove,
};
