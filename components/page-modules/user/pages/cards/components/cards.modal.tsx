import { Dialog } from "@/components/common/dialog";
import { ClientOnly } from "@/components/layout/client-only";
import { CardsAdd } from "@/components/page-modules/user/pages/cards/components/cards.add";

type Props = {
    onShow: boolean;
    setOnShow: React.Dispatch<boolean>
};

export function CardsAddModal({ onShow, setOnShow }: Props) {
    return (
        <ClientOnly>
            <Dialog width="w-[max-content_!important] md:w-[26.5rem_!important]" open={onShow} onCancel={() => setOnShow}>
                <CardsAdd />
            </Dialog>
        </ClientOnly>
    )
}