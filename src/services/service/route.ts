import type { Service } from "../../types/service";
import { delay } from "../../util/delay";
import { services } from "./data";

export const getServices = async (): Promise<Service[]> => {
    const delayTime = Math.floor(Math.random() * 1500) + 500;
    await delay(delayTime)
    if (Math.random() < 0.1) {
        throw new Error("An error ocurred when fetching stations")
    }
    return services
}