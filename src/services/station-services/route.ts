import type { Service } from "../../types/service";
import { simulateNetwork } from "../../utils/simulate-network";
import { services } from "../service/data";
import { stationServices } from "./data";

export const getStationServices = async (stationId: string): Promise<Service[]> => {
    await simulateNetwork("An error ocurred when fetching stations services")
    const currentStationServices = stationServices.filter((stationService) => stationService.stationId === stationId)
    return services.filter((service) =>
        currentStationServices.some((rel) => rel.idServicio === service.idServicio)
    )
}