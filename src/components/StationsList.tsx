import { Link } from "react-router-dom"
import type { UpdateStationStatusParams } from "../hooks/useUpdateStationStatus"
import type { ContentItem } from "../types/ui/content-item"

interface StationListProps {
    stations: ContentItem[],
    isPending: boolean,
    isFetching: boolean,
    variables: UpdateStationStatusParams | undefined
    onToggle: (stationId: string, currentStatusId: string) => void
}

export default function StationsList({
    stations,
    isPending,
    isFetching,
    variables,
    onToggle
}: StationListProps) {
    return (
        <div className="flex flex-col items-center space-y-5">
            {
                stations.map(station => {
                    const isThisUpdating = (isPending || isFetching) && variables?.stationId === station.stationId
                    return (
                        <div className="bg-white w-96 rounded-lg shadow-md overflow-hidden">
                            <Link to={`/stations/${station.stationId}`} className="block">
                                <div className="h-2 bg-red-500"></div>
                                <div className="p-5 pb-0">
                                    <h3 className="text-xl font-bold">{station.name}</h3>
                                    <p className="text-gray-600 mt-2">{station.statusLabel}</p>
                                </div>
                            </Link>
                            <div className="p-5 flex justify-end">
                                <button
                                    className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full"
                                    onClick={() => onToggle(station.stationId, station.statusId)}
                                    disabled={isThisUpdating}
                                >
                                    {isThisUpdating ? "Actualizando..." : "Cambiar estado"}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}