import { ShoppingCartContent } from "@/components/page-modules/shopping-cart/components/shopping-cart.content"
import { CardTotal } from "@/components/page-modules/shopping-cart/components/total";
import { CouponeCode } from "@/components/page-modules/shopping-cart/components/coupone";

export function ShoppingCartContainer() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6">
            <ShoppingCartContent />
            <div className="flex-[0_0_100%] max-w-full lg:flex-[0_0_26.5rem] lg:max-w-[26.5rem] flex-col flex md:flex-row lg:flex-col gap-6">
                <CardTotal />
                <CouponeCode />
            </div>
        </div>
    )
}