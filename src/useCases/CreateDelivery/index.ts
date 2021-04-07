import { UUID } from "./../../utils/implementations/UUID";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateDeliveryController } from "./CreateDeliveryController";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

const postgresUserRepository = new PostgresUserRepository();
const uuid = new UUID();

const createDeliveryUseCase = new CreateDeliveryUseCase(
  postgresUserRepository,
  uuid
);

const createDeliveryController = new CreateDeliveryController(
  createDeliveryUseCase
);

export { createDeliveryController, createDeliveryUseCase };
