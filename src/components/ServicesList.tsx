import type { ServiceUiModel } from "../mappers/service-mapper"
import ServiceItem from "./ServiceItem"

export default function ServicesList({ services }: { services: ServiceUiModel[] }) {
    return (
        <div className="flex flex-col items-center space-y-4">
            {services.map((service) => {
                return (
                    <ServiceItem key={service.id} service={service} />
                )
            })}
        </div>
    )
}