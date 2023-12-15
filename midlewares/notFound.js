export const notFound = (req, res, next) => {
  res.status(404).send({ status: "ERROR", message: "No existe la ruta especificada, por favor revise la documentación"});
  next();
};
