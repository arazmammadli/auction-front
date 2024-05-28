import { CheckoutInformation } from "@/components/page-modules/checkout/components/checkout-information/index";
import { OrderSummary } from "@/components/page-modules/checkout/components/order/index";

export function CheckoutContainer() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6">
            <CheckoutInformation />
            <div className="basis-[26.5rem]">
                <OrderSummary />
            </div>
        </div>
    )
}