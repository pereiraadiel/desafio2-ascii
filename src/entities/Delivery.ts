import { IUUID } from './../utils/IUUID';

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

  constructor(props: Omit<Delivery,'id'>, private uuid: IUUID, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = this.uuid.execute();
    }
  } 
}

export {
  Delivery,
  IAddress
}