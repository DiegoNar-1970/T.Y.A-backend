import { Router } from "express";
import { CustomerController } from "../Controllers/customerController.js";

export const customerRouter = Router()

customerRouter.get("/", CustomerController.getAll); 
customerRouter.get("/by-cc/:cc", CustomerController.getByCc); 
customerRouter.get("/by-name/:name", CustomerController.getByName); 
customerRouter.post("/", CustomerController.create); 
// customerRouter.patch("/:id", CustomerController.updatePartialCustomer);

