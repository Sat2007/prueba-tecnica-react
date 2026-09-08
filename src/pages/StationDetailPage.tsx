import { useParams } from "react-router-dom"
import useStationService from "../hooks/useStationService";

export default function StationDetailPage() {
    const { stationId } = useParams();

    const {
        services,
        isServicesLoading,
        isServicesError,
        servicesError
    } = useStationService(stationId)



    return (
        <main>
            <h1>Servicios de la estacion {stationId}</h1>
            {isServicesLoading && (<div className="mb-4 text-blue-500">Loading services...</div>)}
            {isServicesError && (<div className="mb-4 text-red-500">Error: {servicesError?.message}</div>)}
            {services?.length === 0 && !isServicesError && !isServicesLoading && (
                <div className="mb-4">This Station dosent have services.</div>
            )}
            {services && services.length > 0 && (
                <div>
                    {services?.map((service) => (
                        <h1>servicio {service.nombreServ}</h1>
                    ))}
                </div>
            )}
        </main>
    )
}