import { Router } from "express";
import { ContractController } from "../Controllers/contractController.js";

export const contractRouter = Router()

contractRouter.get("/", ContractController.getAll);
contractRouter.post("/", ContractController.create);
contractRouter.get("/contracts-by-date", ContractController.getContractsByDates);
contractRouter.get("/get-general-info", ContractController.getGeneralInfo); 
contractRouter.post("/get-any-contract", ContractController.getAnyContract);

//rutas genericas al final
contractRouter.get("/:contract", ContractController.getByRadicado);

