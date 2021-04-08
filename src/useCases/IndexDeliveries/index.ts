import { IndexDeliveriesController } from "./IndexDeliveriesController";
import { IndexDeliveriesUseCase } from "./IndexDeliveriesUseCase";
import { TypeormDeliveriesRepository } from "../../repositories/implementations/TypeormDeliveriesRepository";

const deliveriesRepository = new TypeormDeliveriesRepository();

const indexDeliveriesUseCase = new IndexDeliveriesUseCase(deliveriesRepository);

const indexDeliveriesController = new IndexDeliveriesController(
  indexDeliveriesUseCase
);

export { indexDeliveriesController, indexDeliveriesUseCase };
