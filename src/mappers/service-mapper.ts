import { Bath, CreditCard, Lock, ShoppingBag, type LucideIcon } from "lucide-react"
import type { Service } from "../types/service"

const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
    "s1": Bath,
    "s2": CreditCard,
    "s3": Lock,
    "s4": ShoppingBag,
}

export interface ServiceUiModel extends Service {
    Icon: LucideIcon
}

export function toServiceUiModel(service: Service): ServiceUiModel {
    return {
        ...service,
        Icon: SERVICE_ICON_MAP[service.idServicio] ?? CreditCard,
    }
}