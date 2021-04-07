import { Delivery } from '../../entities/Delivery';
import { IDeliverysRepository } from '../IDeliverysRepository';

export class PostgresUserRepository implements IDeliverysRepository {
  
  private deliverys: Delivery[] = [];

  constructor () {
  }

  async index(): Promise<Delivery[] | undefined> {
    return this.deliverys;
  }
  
  async save(delivery: Delivery): Promise<void> {
    this.deliverys.push(delivery);
    // console.log(this.deliverys);
  }
  
  async delete(delivey: Delivery): Promise<void> {
    const index = this.deliverys.indexOf(delivey);
    const dels: Delivery[] = [];
    
    this.deliverys.forEach((del, i) => {
      if(i !== index) dels.push(del);
    });

    this.deliverys = dels;
  }
}