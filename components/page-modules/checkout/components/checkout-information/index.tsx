import { BillingInformation } from "@/components/page-modules/checkout/components/checkout-information/billingInformation";
import { PaymentOption } from "@/components/page-modules/checkout/components/checkout-information/paymentOption";
import { AdditionalInformation } from "@/components/page-modules/checkout/components/checkout-information/additionalInformation";

export function CheckoutInformation() {
    return (
        <div className="max-w-[54.5rem] mx-auto">
            <BillingInformation />
            <PaymentOption />
            <AdditionalInformation/>
        </div>
    )
}