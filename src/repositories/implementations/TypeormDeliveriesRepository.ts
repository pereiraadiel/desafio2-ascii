import { getRepository, Repository } from "typeorm";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

import "reflect-metadata";
import "../../database/connection";

export class TypeormDeliveriesRepository implements IDeliveriesRepository {

  private typeormDeliveriesRepo: Repository<Delivery>;

  constructor() {}

  async index(): Promise<Delivery[] | undefined> {
    this.typeormDeliveriesRepo = getRepository(Delivery);
    const deliveries = await this.typeormDeliveriesRepo.find();
    return deliveries;
  }

  async save(delivery: Delivery): Promise<void> {
    this.typeormDeliveriesRepo = getRepository(Delivery);
    await this.typeormDeliveriesRepo.save(delivery);
  }

  async delete(delivery: Delivery): Promise<boolean> {
    this.typeormDeliveriesRepo = getRepository(Delivery);
    const result = await this.typeormDeliveriesRepo.delete(delivery);
    if(result.affected && result.affected > 0) return true;
    throw new Error("Delivery cannot be deleted because we were unable to find it");
  }

}
