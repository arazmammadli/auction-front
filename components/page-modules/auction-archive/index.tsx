import HydratedProvider from "@/app/providers/hydrated-provider";
import { auctionArchiveRequest } from "./data/auction-archive.request";
import { AuctionArchiveContainer } from "./container/auction-archive.container";
import { Container } from "@/components/common/container";
import { QueryFns } from "@/global/types/query.type";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
}

export function AuctionArchive(props: Props) {
    const { lang } = props;

    // react query ssr data fetching
    const queryFns: QueryFns[] = [
        {
            prefetchType: 'infiniteQuery',
            queryFn: () => auctionArchiveRequest.getAuctionArchive({})
        },
        {
            prefetchType: 'query',
            queryFn: () => getDictionary(lang)
        }
    ];

    return (
        <div className="w-full py-8">
            <HydratedProvider queryKeys={[["getAuctionsArchive"],["getLang"]]} queryFns={queryFns}>
                <Container>
                    <AuctionArchiveContainer />
                </Container>
            </HydratedProvider>
        </div>
    )
};