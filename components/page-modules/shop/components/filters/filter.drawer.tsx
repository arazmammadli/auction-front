import { CommonDrawer } from "@/components/common/drawer";
import { FilterDrawerHead } from "@/components/page-modules/shop/components/filters/filter.drawer.head";
import { Filters } from "@/components/page-modules/shop/components/filters/index";

type Props = {
    open: boolean;
    onClose: () => void;
}

export function FilterDrawer({ onClose, open }: Props) {
    return (
        <CommonDrawer bgColor="#fff" width="md:w-[500px_!important]" logo={<FilterDrawerHead />} onClose={onClose} open={open}>
            <div className="w-full">
                <Filters />
            </div>
        </CommonDrawer>
    )
}