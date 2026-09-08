import { renderHook, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { describe, it, expect, vi } from "vitest"
import useStations from "./useStations"
import { getStations } from "../services/station/route"

vi.mock("../services/station/route")

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

function wrapper({ children }: { children: React.ReactNode }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

describe("useStations", () => {
    it("devuelve las estaciones cuando el servicio responde correctamente", async () => {
        vi.mocked(getStations).mockResolvedValue([
            {
                station: { id: 1, name: "Estación Prueba 1", stationId: "001" },
                status: { id: 1, statusId: "st001", statusName: "Activo" },
                updatedAt: "2026-09-08T14:30:00.000Z",
            },
        ])

        const { result } = renderHook(() => useStations(), { wrapper })

        await waitFor(() => expect(result.current.isLoading).toBe(false))

        expect(result.current.stations).toHaveLength(1)
    })
})