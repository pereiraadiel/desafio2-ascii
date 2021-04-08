import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UUID } from '../utils/implementations/UUID';
import { IUUID } from './../utils/IUUID';

// interface IAddress {
//   streetAddress: string;
//   number: string;
//   neighborhood: string;
//   referential: string;
//   city: string;
//   state: string;
//   country: string;
//   geo: {
//     lat: number;
//     log: number;
//   }
// }

@Entity("deliveries")
class Delivery {
  @PrimaryColumn()
  public readonly id: string;
  
  @Column()
  public name: string;
  
  @Column()
  public weight: number;
  
  @Column({
    name: "street_address"
  })
  streetAddress: string;
  
  @Column()
  number: string;
  
  @Column()
  neighborhood: string;
  
  @Column()
  referential: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  lat?: number;

  @Column()
  log?: number;

  constructor(props: Omit<Delivery,'id'>, protected uuid: IUUID = new UUID(), id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = this.uuid.execute();
    }
  } 
}

export {
  Delivery,
  // IAddress
}