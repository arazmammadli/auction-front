import { Container } from "@/components/common/container";
import { CheckoutSuccessContent } from "@/components/page-modules/checkout-success/components/success.content"

export function CheckoutSuccess() {
    return (
        <div className="w-full py-[100px]">
            <Container>
                <CheckoutSuccessContent />
            </Container>
        </div>
    )
}