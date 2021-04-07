import { IAddress } from "../../entities/Delivery";

export interface ICreateDeliveryRequestDTO{
  name: string;
  weight: number;
  address: IAddress;
}