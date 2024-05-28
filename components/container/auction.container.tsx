'use client';

import { AuctionCard } from '../page-modules/auction/components/auction-card';
import { IAuction } from '../page-modules/auction/data/auction.type';
import { useGetAuctions } from '../page-modules/auction/hooks/auctions-get.hook';

type Props = {};

export function AuctionContainer(props: Props) {
  const auctions = useGetAuctions();

  // sort by start date
  const data = auctions.data?.list.sort((a:IAuction,b:IAuction) => {
    return  new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {data.map((item) => (
        <AuctionCard key={item.id} {...item} />
      ))}
    </div>
  );
};
