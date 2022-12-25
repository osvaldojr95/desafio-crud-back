import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(1),
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

export async function signUpValidate(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.sendStatus(422);
  }

  const user = { username, email, password };
  const validation = userSchema.validate(user, { abortEarly: false });
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

export async function signInValidate(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(422);
  }

  const user = { email, password };
  const validation = userSchema.validate(user, { abortEarly: false });
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}
