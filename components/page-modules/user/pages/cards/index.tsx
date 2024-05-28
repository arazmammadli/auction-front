import { CardsContainer } from "@/components/page-modules/user/pages/cards/container/cards.container";
import { ClientOnly } from "@/components/layout/client-only";

export default function Cards() {
    return (
        <ClientOnly>
            <CardsContainer />
        </ClientOnly>
    )
}