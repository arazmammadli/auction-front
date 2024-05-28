import { Dialog } from "@/components/common/dialog";
import { ClientOnly } from "@/components/layout/client-only";
import { ProductPreviewContainer } from "@/components/page-modules/product-detail/container/preview.container";

type Props = {
    onShow: boolean;
    setOnShow: React.Dispatch<boolean>
};

export function ProductDetailDialog({ onShow, setOnShow }: Props) {
    return (
        <ClientOnly>
            <Dialog width="w-[max-content_!important] lg:w-[87.5rem_!important]" open={onShow} onCancel={() => setOnShow}>
                <div className="p-3 md:p-10 w-full">
                    <ProductPreviewContainer />
                </div>
            </Dialog>
        </ClientOnly>
    )
}