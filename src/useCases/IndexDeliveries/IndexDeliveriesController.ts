import { IndexDeliveriesUseCase } from './IndexDeliveriesUseCase';
import { Response, Request } from "express";

export class IndexDeliveriesController {
  constructor(private indexDeliveriesUseCase: IndexDeliveriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const deliveries = await this.indexDeliveriesUseCase.execute();

      return res.status(201).json(deliveries);
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Unexpected error!",
      });
    }
  }
}
