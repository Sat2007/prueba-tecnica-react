import type { Status } from "../../types/status";
import { simulateNetwork } from "../../utils/simulate-network";
import { stationStatusData, type StationStatus } from "./data";

export interface StationStatusInfo {
    status: Status
    updatedAt: string
}


export const getStationStatus = async (): Promise<StationStatus[]> => {
    await simulateNetwork("An error ocurred when fetching stations status")
    return stationStatusData
}