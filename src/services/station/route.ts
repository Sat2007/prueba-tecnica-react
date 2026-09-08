import type { Station } from "../../types/station";
import type { Status } from "../../types/status";
import { simulateNetwork } from "../../utils/simulate-network";
import { getStationStatus } from "../station-status/route";
import { statusData } from "../status/data";
import { stations } from "./data";

export interface StationInfo {
    station: Station,
    status: Status,
    updatedAt: string
}

export const getStations = async (): Promise<StationInfo[]> => {
    await simulateNetwork("An error occurred when fetching stations")
    const statusList = await getStationStatus()
    return stations.map((station) => {
        const currentStationStatus = statusList.find((stationStatus) => stationStatus.stationId === station.stationId)
        if (!currentStationStatus) {
            throw new Error(`No status relation found for station ${station.stationId}`)
        }

        const status = statusData.find((status) => status.statusId === currentStationStatus.statusId)
        if (!status) {
            throw new Error(`Status not found for id ${currentStationStatus.statusId}`)
        }

        return { station, status, updatedAt: currentStationStatus.updatedAt }
    })
}