import { v4 as uuid } from 'uuid';

interface IAddress {
  streetAddress: string;
  number: string;
  neighborhood: string;
  referential: string;
  city: string;
  state: string;
  country: string;
  geo: {
    lat: number;
    log: number;
  }
}

class Delivery {
  public readonly id: string;
  public name: string;
  public weight: number;
  public address: IAddress;

  constructor(props: Omit<Delivery, 'id'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = uuid();
    }
  } 
}

export {
  Delivery,
  IAddress
}