type Status = "draft" | "published"

export interface ContentItem {
    id: number,
    name: string,
    stationId: string,
    status: Status,
    updatedAt: string
}

