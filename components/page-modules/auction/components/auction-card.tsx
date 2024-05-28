'use client';

import { AuctionStatus, IAuction } from '../data/auction.type';
import { AuctionInfo } from './auction-info';
import { useMemo } from 'react';
import { AuctionCardHeader } from './auction-card-header';
import dynamic from 'next/dynamic';
import { useGetPublicLang } from '@/global/requests/get-public-lang';

const AuctionTimer = dynamic(() => import('./auction-timer'));
const AuctionButton = dynamic(() => import("./auction-button"));

type Props = {} & IAuction;

export function AuctionCard(props: Props) {
  const {
    connectionFee,
    endDate,
    startDate,
    startPrice,
    id,
    isConnectedCurrentUser,
    maxOffer,
    onlineConnectionFee,
    participantCount,
    product,
    price,
    slug,
    lastOffer,
    auctionStatus,
    aggregatePartner,
    aggregateId,
    minIncrease,
    maxIncrease,
    winnerName,
  } = props;

  // language data request
  const { data: langData } = useGetPublicLang();
  
  const Timer = useMemo(() => {
    return (
      auctionStatus.id !== AuctionStatus.ENDED && (
        <AuctionTimer
          endDate={endDate}
          startDate={startDate}
          statusId={auctionStatus.id}
          dayTxt={langData.auction.day_txt}
          hourTxt={langData.auction.hour_txt}
          minuteTxt={langData.auction.minute_txt}
          secondTxt={langData.auction.second_txt}
        />
      )
    );
  }, [auctionStatus.id]);

  return (
    <div className='flex flex-col relative gap-2 justify-between border border-solid border-[#E4E7E9] bg-white p-4'>
      <AuctionCardHeader
        auctionStatus={auctionStatus}
        buying={product.buying}
        mainImage={product.mainImage}
        slug={slug}
      />

      {Timer}

      <h1 className='text-xl font-bold mt-2'> {product.name}</h1>

      <AuctionInfo
        minIncrease={minIncrease}
        maxIncrease={maxIncrease}
        startPrice={String(startPrice)}
        endDate={endDate}
        joinFee={String(connectionFee)}
        lastBid={String(lastOffer)}
        startDate={startDate}
        liveJoinFee={String(onlineConnectionFee)}
        winner={winnerName}
        isConnectedCurrentUser={isConnectedCurrentUser}
        langData={langData.auction.auction_detail}
        auctionBidWarning={langData.auction.auction_bid_warning}
        auctionFreeTxt={langData.auction.auction_free_txt}
        auctionWinnerTxt={langData.auction.auction_winner_txt}
      />
      {
        auctionStatus.id === AuctionStatus.ENDED ? <></> : <AuctionButton
          aggId={aggregateId}
          lastOffer={lastOffer}
          minIncrease={minIncrease}
          auctionId={id}
          auctionStatus={auctionStatus}
          connectionFee={connectionFee}
          isConnectedCurrentUser={isConnectedCurrentUser}
          onlineConnectFee={onlineConnectionFee}
        />
      }
    </div>
  );
}
