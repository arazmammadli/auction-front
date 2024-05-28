import { Container } from "@/components/common/container";
import { CheckoutContainer } from "@/components/page-modules/checkout/containers/checkout.container";

export function Checkout() {
    return (
        <div className="w-full py-[72px]">
            <Container>
                <CheckoutContainer />
            </Container>
        </div>
    )
}