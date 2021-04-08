export interface ICreateDeliveryRequestDTO{
  name: string;
  weight: number;
  streetAddress: string;
  number: string;
  neighborhood: string;
  referential: string;
  city: string;
  state: string;
  country: string;
  lat?: number;
  log?: number;
}