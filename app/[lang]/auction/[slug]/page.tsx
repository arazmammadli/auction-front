import HydratedProvider from '@/app/providers/hydrated-provider';
import { AuctionDetail } from '@/components/page-modules/auction/auction-detail';
import { auctionRequest } from '@/components/page-modules/auction/data/auction.request';
import { AuthStoreTypes } from '@/components/page-modules/auth/data/auth.store';
import { LangType } from '@/global/types/lang.type';
import { QueryFns } from '@/global/types/query.type';
import { getDictionary } from '@/utils/dictionary';
import { cookies } from "next/headers"
type Props = {
  params: { slug: string, lang: LangType };
};

export default async function AuctionDetailPage(props: Props) {

  const serializedAuthState = cookies().get('auth-storage');
  const parsedAuthObject = serializedAuthState ? JSON.parse(serializedAuthState.value) : null;
  const accessToken = parsedAuthObject?.state?.auth?.accessToken;

  // react query ssr data fetching
  const queryFns: QueryFns[] = [
    {
      prefetchType: 'query',
      queryFn: () => auctionRequest.getAuction(props.params.slug, accessToken)
    },
    {
      prefetchType: 'query',
      queryFn: () => getDictionary(props.params.lang)
    }
  ];


  return <HydratedProvider queryFns={queryFns} queryKeys={[['getAuction'],["getLang"]]}>
    <AuctionDetail />
  </HydratedProvider>

}
