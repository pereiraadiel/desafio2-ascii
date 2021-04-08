import { UUID } from "./../../utils/implementations/UUID";
import { PostgresDeliveriesRepository } from "../../repositories/implementations/PostgresDeliveriesRepository";
import { CreateDeliveryController } from "./CreateDeliveryController";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

const postgresDeliveriesRepository = new PostgresDeliveriesRepository();
const uuid = new UUID();

const createDeliveryUseCase = new CreateDeliveryUseCase(
  postgresDeliveriesRepository,
  uuid
);

const createDeliveryController = new CreateDeliveryController(
  createDeliveryUseCase
);

export { createDeliveryController, createDeliveryUseCase };
