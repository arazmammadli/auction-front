import { Container } from "@/components/common/container";
import { ShopContainer } from "@/components/page-modules/shop/container/shop.container";

export function Shop() {
    return (
        <div className="w-full pt-10 pb-[72px]">
            <Container>
                <ShopContainer />
            </Container>
        </div>
    )
}