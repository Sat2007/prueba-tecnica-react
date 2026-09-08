import { useQuery } from "@tanstack/react-query";
import { getStationStatus, type StationStatusInfo } from "../services/station-status/route";

export default function useStationStatus(stationId: string | undefined) {
    const {
        data: statusInfo,
        isLoading: isStatusLoading,
        isError: isStatusError,
        error: statusError
    } = useQuery<StationStatusInfo>({
        queryKey: ["service", stationId],
        queryFn: () => {
            if (!stationId) throw new Error("stationId is required")
            return getStationStatus(stationId)
        },
        enabled: !!stationId
    })

    return {
        statusInfo,
        isStatusLoading,
        isStatusError,
        statusError
    }
}