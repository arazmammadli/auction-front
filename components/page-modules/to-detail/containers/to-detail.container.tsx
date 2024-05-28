import { ProductTracking } from "@/components/page-modules/to-detail/components/tracking";
import { TrackingOrderActivity } from "@/components/page-modules/to-detail/components/tracking-order.activity";

export function TrackOrderDetailContainer() {
    return (
        <div className="w-full">
            <ProductTracking />
            <TrackingOrderActivity />
        </div>
    )
}