import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateStationStatus } from "../services/station-status/route"

export interface UpdateStationStatusParams {
    stationId: string
    newStatusId: string
}

export default function useUpdateStationStatus() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ stationId, newStatusId }: UpdateStationStatusParams) =>
            updateStationStatus(stationId, newStatusId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stations"] })
        },
    })
}