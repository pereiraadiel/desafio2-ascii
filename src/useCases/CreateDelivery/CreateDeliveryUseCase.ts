import { IUUID } from "./../../utils/IUUID";
import { ICreateDeliveryRequestDTO } from "./CreateDeliveryDTO";
import { Delivery } from "../../entities/Delivery";
import { IDeliverysRepository } from "../../repositories/IDeliverysRepository";

export class CreateDeliveryUseCase {
  constructor(
    private deliverysRepository: IDeliverysRepository,
    private uuid: IUUID
  ) {}

  async execute(data: ICreateDeliveryRequestDTO) {
    const delivery = new Delivery(data, this.uuid);

    if (data.name === undefined)
      throw new Error("Campo Nome do cliente(name) é obrigatório");
    if (data.weight === undefined)
      throw new Error("Campo Peso do pacote(weight) é obrigatório");
    if (data.address === undefined)
      throw new Error("Campo Endereço de entrega(address) é obrigatório");

    if (
      data.address.city === undefined ||
      data.address.country === undefined ||
      data.address.geo === undefined ||
      data.address.geo.lat === undefined ||
      data.address.geo.log === undefined ||
      data.address.neighborhood === undefined ||
      data.address.number === undefined ||
      data.address.referential === undefined ||
      data.address.state === undefined ||
      data.address.streetAddress === undefined
    ) {
      // console.log(delivery);
      throw new Error(
        "Campo endereço(address) foi mal informado, confira a documentação"
      );
    }

    await this.deliverysRepository.save(delivery);
  }
}
