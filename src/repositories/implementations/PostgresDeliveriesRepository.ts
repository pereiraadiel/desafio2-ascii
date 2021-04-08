import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

export class PostgresDeliveriesRepository implements IDeliveriesRepository {
  private deliveries: Delivery[] = [];

  constructor() {}

  async index(): Promise<Delivery[] | undefined> {
    return this.deliveries;
  }

  async save(delivery: Delivery): Promise<void> {
    this.deliveries.push(delivery);
    console.log(this.deliveries);
  }

  async delete(delivey: Delivery): Promise<void> {
    const index = this.deliveries.indexOf(delivey);
    const dels: Delivery[] = [];

    this.deliveries.forEach((del, i) => {
      if (i !== index) dels.push(del);
    });

    this.deliveries = dels;
  }
}
