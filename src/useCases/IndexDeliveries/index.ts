import { IndexDeliveriesController } from "./IndexDeliveriesController";
import { PostgresDeliveriesRepository } from "../../repositories/implementations/PostgresDeliveriesRepository";
import { IndexDeliveriesUseCase } from "./IndexDeliveriesUseCase";

const deliveriesRepository = new PostgresDeliveriesRepository();

const indexDeliveriesUseCase = new IndexDeliveriesUseCase(deliveriesRepository);

const indexDeliveriesController = new IndexDeliveriesController(
  indexDeliveriesUseCase
);

export { indexDeliveriesController, indexDeliveriesUseCase };
