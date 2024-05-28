import { Container } from "@/components/common/container";
import { TrackOrderContainer } from "@/components/page-modules/track-order/container/track.container";

export function TrackOrder() {
    return (
        <div className="w-full pt-12 pb-12 md:pb-[7.375rem]">
            <Container>
                <TrackOrderContainer />
            </Container>
        </div>
    )
}