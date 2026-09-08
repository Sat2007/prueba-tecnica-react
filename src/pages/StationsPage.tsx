import useStations from "../hooks/useStations"
import useUpdateStationStatus from "../hooks/useUpdateStationStatus"
import Header from "../components/Header"
import Loading from "../components/Loading"
import StationsList from "../components/StationsList"

export default function StationsPage() {
    const {
        stations,
        isLoading,
        isError,
        error,
        isFetching
    } = useStations()

    const { mutate: updateStatus, isPending, variables } = useUpdateStationStatus()

    function handleToggle(stationId: string, currentStatusId: string) {
        const newStatusId = currentStatusId === "st001" ? "st002" : "st001"
        updateStatus({ stationId, newStatusId })
    }

    return (
        <main className="bg-gray-50 h-screen space-y-6">
            <Header />
            {isLoading && <Loading />}
            {isError && (<div className="flex justify-center items-center py-10 text-red-500">Error: {error?.message}</div>)}
            {stations?.length === 0 && !isError && !isLoading && (
                <div className="mb-4">No se encontraron estaciones.</div>
            )}
            {stations && stations.length > 0 && (
                <StationsList
                    stations={stations}
                    isPending={isPending}
                    isFetching={isFetching}
                    variables={variables}
                    onToggle={handleToggle}
                />
            )}
        </main>
    )
}