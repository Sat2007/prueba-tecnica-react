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

export const updateStationStatus = async (
    stationId: string,
    newStatusId: string
): Promise<StationStatus> => {
    await simulateNetwork("An error occurred when updating station status")

    const index = stationStatusData.findIndex((item) => item.stationId === stationId)
    if (index === -1) {
        throw new Error(`No status relation found for station ${stationId}`)
    }

    const updatedAt = new Date().toISOString()

    stationStatusData[index] = {
        ...stationStatusData[index],
        statusId: newStatusId,
        updatedAt
    }

    return stationStatusData[index]
}