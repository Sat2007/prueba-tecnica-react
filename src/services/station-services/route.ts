import { delay } from "../../util/delay";
import { stationServices, type StationServices } from "./data";

export const getStationServices = async (): Promise<StationServices[]> => {
    const delayTime = Math.floor(Math.random() * 1500) + 500
    await delay(delayTime)
    if (Math.random() < 0.1) {
        throw new Error("An error ocurred when fetching stations")
    }
    return stationServices
}