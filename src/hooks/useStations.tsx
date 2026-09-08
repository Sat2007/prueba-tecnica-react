import { useQuery } from "@tanstack/react-query";
import type { Station } from "../types/station";
import { getStations } from "../services/station/route";

export default function useStations() {
    const {
        data: stations,
        isLoading,
        isError,
        error
    } = useQuery<Station[]>({
        queryKey: ["stations"],
        queryFn: () => getStations()
    })

    return {
        stations,
        isLoading,
        isError,
        error
    }
}