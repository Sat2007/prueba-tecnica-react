import { useQuery } from "@tanstack/react-query";
import type { Service } from "../types/service";
import { getStationServices } from "../services/station-services/route";

export default function useStationService(stationId: string | undefined) {
    const {
        data: services,
        isLoading: isServicesLoading,
        isError: isServicesError,
        error: servicesError
    } = useQuery<Service[]>(
        {
            queryKey: ["service", stationId],
            queryFn: () => {
                if (!stationId) throw new Error("stationId is required")
                return getStationServices(stationId)
            },
            enabled: !!stationId
        }
    )

    return {
        services,
        isServicesLoading,
        isServicesError,
        servicesError
    }
}