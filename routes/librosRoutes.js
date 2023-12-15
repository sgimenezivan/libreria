import { Router } from "express";
import LibrosController from "../controllers/librosController.js";
const librosRoutes = Router();
const librosController = new LibrosController();

librosRoutes.post("/", librosController.create);
librosRoutes.get("/", librosController.getAll)
librosRoutes.delete("/:codigo/delete", librosController.deleteByCode);
librosRoutes.get("/:codigo", librosController.getByCode);

export default librosRoutes;
