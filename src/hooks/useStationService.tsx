import { useQuery } from "@tanstack/react-query";
import { getStationServices } from "../services/station-services/route";
import { toServiceUiModel } from "../mappers/service-mapper";

export default function useStationService(stationId: string | undefined) {
    const {
        data: services,
        isLoading: isServicesLoading,
    } = useQuery(
        {
            queryKey: ["service", stationId],
            queryFn: () => {
                if (!stationId) throw new Error("stationId is required")
                return getStationServices(stationId)
            },
            select: (services) => services.map(toServiceUiModel),
            enabled: !!stationId
        }
    )

    return {
        services,
        isServicesLoading
    }
}