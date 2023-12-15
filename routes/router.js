import { Router } from "express";
import librosRoutes from "./librosRoutes.js";
import { notFound } from "../midlewares/notFound.js";
const router = Router();

router.use("/libros", librosRoutes)
router.use(notFound)

export default router;
