import { ShoppingCartContainer } from "@/components/page-modules/shopping-cart/containers/shopping-cart.container";
import { Container } from "@/components/common/container";

export function ShoppingCart() {
    return (
        <div className="w-full py-[72px]">
            <Container>
                <ShoppingCartContainer />
            </Container>
        </div>
    )
}