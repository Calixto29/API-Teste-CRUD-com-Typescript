import express from "express";
import ColaboradorController from "./controllers/colaboradorController";

const router = express.Router();
router.post("/colaborador", ColaboradorController.create);
router.get("/colaborador", ColaboradorController.findAll);
router.get("/colaborador/:colaboradorID", ColaboradorController.findOne);
router.put("/colaborador/:colaboradorID", ColaboradorController.update);
router.delete("/colaborador/:colaboradorID", ColaboradorController.delete);

export { router }




