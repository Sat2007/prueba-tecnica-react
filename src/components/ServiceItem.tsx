import type { ServiceUiModel } from "../mappers/service-mapper"

interface ServiceItemProps {
    service: ServiceUiModel
}

export default function ServiceItem({ service }: ServiceItemProps) {
    const Icon = service.Icon
    return (
        <div className="flex items-center gap-3 bg-white w-96 rounded-lg shadow-md p-4">
            <Icon className="text-yellow-600" size={24} aria-hidden="true" />
            <span className="font-medium">{service.nombreServ}</span>
        </div>
    )
}