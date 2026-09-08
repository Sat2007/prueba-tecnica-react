import { useParams } from "react-router-dom"
import useStationService from "../hooks/useStationService";
import Header from "../components/Header";
import ServicesList from "../components/ServicesList";
import Loading from "../components/Loading";

export default function StationDetailPage() {
    const { stationId } = useParams();

    const {
        services,
        isServicesLoading,
    } = useStationService(stationId)



    return (
        <main className="bg-gray-50 h-screen space-y-6">
            <Header />
            {isServicesLoading && <Loading />}
            {services && <ServicesList services={services} />}
        </main>
    )
}