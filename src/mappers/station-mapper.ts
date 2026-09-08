import type { StationInfo } from "../services/station/route";
import type { Status } from "../types/status";
import type { ContentItem, ContentStatus } from "../types/ui/content-item";

export function toContentItem(stationInfoList: StationInfo[]): ContentItem[] {
    return stationInfoList.map((stationInfo) => {
        return {
            id: stationInfo.station.id,
            name: stationInfo.station.name,
            stationId: stationInfo.station.stationId,
            statusId: stationInfo.status.statusId,
            statusLabel: toContentStatus(stationInfo.status),
            updatedAt: stationInfo.updatedAt
        }
    })
}

function toContentStatus(status: Status): ContentStatus {
    switch (status.statusId) {
        case "st001": return "published"
        case "st002": return "draft"
        default:
            throw Error("An error ocurred when mappin the content status")
    }
}