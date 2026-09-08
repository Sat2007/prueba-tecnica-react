import { useEffect, useState } from "react";
import { toServiceUiModel, type ServiceUiModel } from "../mappers/service-mapper";
import { getStationServices } from "../services/station-services/route";

export default function useServiceNoQuery(stationId: string | undefined) {
    const [services, setServices] = useState<ServiceUiModel[]>()
    const [isServicesLoading, setIsServicesLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsServicesLoading(true);

        async function fetchServices() {
            if (!stationId) return

            const rawServices = await getStationServices(stationId)

            if (!isCancelled) {
                setServices(rawServices.map(toServiceUiModel))
                setIsServicesLoading(false)
            }
        }

        fetchServices();

        return () => {
            isCancelled = true;
        };
    }, [stationId]);

    return {
        services,
        isServicesLoading
    }
}