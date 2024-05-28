import { Container } from "@/components/common/container";
import { WishlistContainer } from "@/components/page-modules/wishlist/containers/wishlist.container";

export function Wishlist() {
    return (
        <div className="w-full py-[72px]">
            <Container>
                <WishlistContainer />
            </Container>
        </div>
    )
}