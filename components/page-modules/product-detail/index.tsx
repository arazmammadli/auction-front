import { Container } from "@/components/common/container";
import { ProductPreviewContainer } from "@/components/page-modules/product-detail/container/preview.container";
import { ProductInformation } from "@/components/page-modules/product-detail/components/product.infotmation";

export function ProductDetail() {
    return (
        <Container>
            <div className="pt-8 w-full">
                <ProductPreviewContainer />
            </div>
            <ProductInformation />
        </Container>
    )
}