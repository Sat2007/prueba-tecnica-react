import { useQuery } from "@tanstack/react-query";
import { getStations } from "../services/station/route";
import { toContentItem } from "../mappers/station-mapper";

export default function useStations() {
    const {
        data: stations,
        isLoading,
        isError,
        error,
        isFetching
    } = useQuery({
        queryKey: ["stations"],
        queryFn: () => getStations(),
        select: toContentItem
    })


    return {
        stations,
        isLoading,
        isError,
        error,
        isFetching
    }
}