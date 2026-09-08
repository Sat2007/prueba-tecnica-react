export interface StationServices {
    id: number,
    stationId: string,
    idServicio: string
}

export const stationServices: StationServices[] = [
    { id: 1, stationId: "001", idServicio: "s1" },
    { id: 2, stationId: "001", idServicio: "s2" },
    { id: 3, stationId: "002", idServicio: "s1" },
    { id: 4, stationId: "003", idServicio: "s3" },
    { id: 5, stationId: "003", idServicio: "s1" },
    { id: 6, stationId: "004", idServicio: "s4" }
]