import { Delivery } from "../entities/Delivery";

export interface IDeliverysRepository {
  index(): Promise<Delivery[] | undefined>;
  save(delivery: Delivery): Promise<void>;
  delete(delivey: Delivery): Promise<void>;
}
