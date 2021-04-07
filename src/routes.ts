import { Router } from "express";
import { createDeliveryController } from "./useCases/CreateDelivery";

const routes = Router();

routes.post("/api/deliverys", (req, res) => {
  return createDeliveryController.handle(req, res);
});

export { routes };
