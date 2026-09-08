import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { MemoryRouter } from "react-router-dom"
import StationsList from "./StationsList"
import type { ContentItem } from "../types/ui/content-item"

const mockStations: ContentItem[] = [
    {
        id: 1,
        name: "Estación Prueba 1",
        stationId: "001",
        statusLabel: "published",
        statusId: "st001",
        updatedAt: "2026-09-08T14:30:00.000Z",
    },
]

describe("StationsList", () => {
    it("muestra el nombre de la estación y llama a onToggle al hacer click", async () => {
        const onToggleMock = vi.fn()
        render(
            <MemoryRouter>
                <StationsList
                    stations={mockStations}
                    isPending={false}
                    isFetching={false}
                    variables={undefined}
                    onToggle={onToggleMock}
                />
            </MemoryRouter>
        )

        expect(screen.getByText("Estación Prueba 1")).toBeInTheDocument()

        const button = screen.getByRole("button", { name: /Cambiar estado/i })
        await userEvent.click(button)

        expect(onToggleMock).toHaveBeenCalledWith("001", "st001")
    })
})