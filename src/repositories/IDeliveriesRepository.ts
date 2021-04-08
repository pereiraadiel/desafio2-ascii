import { Delivery } from "../entities/Delivery";

export interface IDeliveriesRepository {
  index(): Promise<Delivery[] | undefined>;
  save(delivery: Delivery): Promise<void>;
  delete(delivey: Delivery): Promise<void>;
}
