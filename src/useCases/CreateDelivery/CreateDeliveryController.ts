import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";
import { Response, Request } from "express";

export class CreateDeliveryController {
  constructor(private createDeliveryUseCase: CreateDeliveryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { 
        name, 
        weight,
        streetAddress,
        number,
        neighborhood,
        referential,
        city,
        state,
        country,
        lat,
        log
      } = req.body;

      await this.createDeliveryUseCase.execute({
        name,
        weight,
        streetAddress,
        number,
        neighborhood,
        referential,
        city,
        state,
        country,
        lat,
        log
      });

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Unexpected error!",
      });
    }
  }
}
