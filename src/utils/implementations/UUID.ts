import { v4 } from 'uuid';
import { IUUID } from './../IUUID';

export class UUID implements IUUID {

  execute(): string {
    return v4();
  }
}