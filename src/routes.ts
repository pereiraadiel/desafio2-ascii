import { Router } from "express";
import { createDeliveryController } from "./useCases/CreateDelivery";
import { indexDeliveriesController } from "./useCases/IndexDeliveries";

const routes = Router();

routes.post("/api/deliveries", (req, res) => {
  return createDeliveryController.handle(req, res);
});

routes.get("/api/deliveries", (req, res) => {
  return indexDeliveriesController.handle(req, res);
})

export { routes };
