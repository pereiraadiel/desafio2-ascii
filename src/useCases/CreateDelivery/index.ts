import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateDeliveryController } from "./CreateDeliveryController";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

const postgresUserRepository = new PostgresUserRepository();

const createDeliveryUseCase = new CreateDeliveryUseCase(
  postgresUserRepository
);

const createDeliveryController = new CreateDeliveryController(
  createDeliveryUseCase
);

export {
  createDeliveryController,
  createDeliveryUseCase
}