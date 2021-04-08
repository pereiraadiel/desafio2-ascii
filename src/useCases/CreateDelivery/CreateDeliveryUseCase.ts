import { IUUID } from "./../../utils/IUUID";
import { ICreateDeliveryRequestDTO } from "./CreateDeliveryDTO";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

export class CreateDeliveryUseCase {
  constructor(
    private deliveriesRepository: IDeliveriesRepository,
    private uuid: IUUID
  ) {}

  async execute(data: ICreateDeliveryRequestDTO) {
    const delivery = new Delivery(data, this.uuid);

    if (data.name === undefined)
      throw new Error("Campo Nome do cliente(name) é obrigatório");
    if (data.weight === undefined)
      throw new Error("Campo Peso do pacote(weight) é obrigatório");

    if (
      data.city === undefined ||
      data.country === undefined ||
      data.lat === undefined ||
      data.log === undefined ||
      data.neighborhood === undefined ||
      data.number === undefined ||
      data.referential === undefined ||
      data.state === undefined ||
      data.streetAddress === undefined
    ) {
      console.log(delivery);
      throw new Error(
        "Campo referentes ao endereço foram mal informados, confira a documentação"
      );
    }

    await this.deliveriesRepository.save(delivery);
  }
}
