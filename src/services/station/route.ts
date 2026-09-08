import type { Station } from "../../types/station";
import { delay } from "../../util/delay";
import { stations } from "./data";

export const getStations = async (): Promise<Station[]> => {
    const delayTime = Math.floor(Math.random() * 1500) + 500;
    await delay(delayTime)
    if (Math.random() < 0.1) {
        throw new Error("An error ocurred when fetching stations")
    }
    return stations
}