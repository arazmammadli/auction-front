import HydratedProvider from '@/app/providers/hydrated-provider';
import { AuctionContainer } from '@/components/container/auction.container';
import { auctionRequest } from './data/auction.request';
import { cookies } from 'next/headers';
import { QueryFns } from '@/global/types/query.type';
import { getDictionary } from '@/utils/dictionary';
import { LangType } from '@/global/types/lang.type';

type Props = {
    lang: LangType;
};

export function Auction(props: Props) {
    const { lang } = props;
    const serializedAuthState = cookies().get('auth-storage');
    const parsedAuthObject = serializedAuthState ? JSON.parse(serializedAuthState.value) : null;
    const accessToken = parsedAuthObject?.state?.auth?.accessToken;

    const queryFns: QueryFns[] = [
        {
            prefetchType: 'query',
            queryFn: () => auctionRequest.getAuctions({}, accessToken)
        },
        {
            prefetchType: 'query',
            queryFn: () => getDictionary(lang)
        }
    ];

    return <HydratedProvider queryKeys={[['getAuctions'], ["getLang"]]} queryFns={queryFns}>
        <AuctionContainer />
    </HydratedProvider>
};