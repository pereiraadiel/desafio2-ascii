import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

export class IndexDeliveriesUseCase {
  constructor(
    private deliveriesRepository: IDeliveriesRepository
  ) {}

  async execute() {
    const deliveries = await this.deliveriesRepository.index();
    console.log(deliveries);
    if( ! deliveries ) return [];
    return deliveries;
  }
}
