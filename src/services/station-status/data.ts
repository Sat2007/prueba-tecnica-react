export interface StationStatus {
    id: number,
    stationId: string,
    statusId: string,
    updatedAt: string
}

export const stationStatusData: StationStatus[] = [
    {
        id: 1,
        stationId: "001",
        statusId: "st001",
        updatedAt: "2026-09-08T14:30:00.000Z"
    },
    {
        id: 2,
        stationId: "002",
        statusId: "st002",
        updatedAt: "2026-09-08T14:30:00.000Z"
    },
    {
        id: 3,
        stationId: "003",
        statusId: "st001",
        updatedAt: "2026-09-08T14:30:00.000Z"
    },
    {
        id: 4,
        stationId: "004",
        statusId: "st001",
        updatedAt: "2026-09-08T14:30:00.000Z"
    }
]