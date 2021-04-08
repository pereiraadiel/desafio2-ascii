import { UUID } from "./../../utils/implementations/UUID";
import { CreateDeliveryController } from "./CreateDeliveryController";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";
import { TypeormDeliveriesRepository } from "../../repositories/implementations/TypeormDeliveriesRepository";

const deliveriesRepository = new TypeormDeliveriesRepository();
const uuid = new UUID();

const createDeliveryUseCase = new CreateDeliveryUseCase(
  deliveriesRepository,
  uuid
);

const createDeliveryController = new CreateDeliveryController(
  createDeliveryUseCase
);

export { createDeliveryController, createDeliveryUseCase };
