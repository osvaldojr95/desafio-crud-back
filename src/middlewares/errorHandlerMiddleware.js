export function errorHandlerMiddleware(err, req, res, next) {
  return res.status(Number(err.status)).send(err.text);
}
