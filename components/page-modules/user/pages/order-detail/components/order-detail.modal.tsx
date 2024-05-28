import { Dialog } from "@/components/common/dialog";
import { ClientOnly } from "@/components/layout/client-only";
import {LeaveRating} from "@/components/page-modules/user/pages/order-detail/components/rating";

type Props = {
    onShow: boolean;
    setOnShow: React.Dispatch<boolean>
};

export function OrderDetailLeaveRating({onShow,setOnShow}:Props) {
    return (
        <ClientOnly>
            <Dialog width="w-[max-content_!important] md:w-[29.5rem_!important]" closeIcon={false} open={onShow} onCancel={() => setOnShow}>
                <LeaveRating/>
            </Dialog>
        </ClientOnly>
    )
}