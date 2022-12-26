import Joi from "joi";

const annotationsSchema = Joi.object({
  text: Joi.string().required(),
});

export async function annotationValidation(req, res, next) {
  const { text } = req.body;

  if (!text) {
    throw { text: "textNotFound", status: 422 };
  }

  const validation = annotationsSchema.validate({ text }, { abortEarly: false });
  if (validation.error) {
    throw { status: 422 };
  }
  
  next();
}
