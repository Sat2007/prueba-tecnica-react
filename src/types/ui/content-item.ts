export type ContentStatus = "draft" | "published"

export interface ContentItem {
    id: number,
    name: string,
    stationId: string,
    statusLabel: ContentStatus,
    updatedAt: string
}

