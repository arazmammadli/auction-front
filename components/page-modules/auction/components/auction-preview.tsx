'use client';
import React, { useEffect, useMemo } from 'react';

import { AuctionStatus, IAuction } from '../data/auction.type';
import { AuctionInfo } from './auction-info';
import { AuctionPreviewImages } from './auction-preview-images';
import dynamic from 'next/dynamic';
import { AuctionPreviewHeader } from './auction-preview-header';
import { AuctionWasSeen } from './auction-was-seen';
import { useNotify } from '@/global/hooks/notify.hook';
import { useGetAuction } from '../hooks/auction-get.hook';
import { useAuctionStore } from '../data/auction.store';
import { connectSocket } from '@/shared/socket';
import { PaymentMethodImages } from '@/components/common/payment.image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useGetPublicLang } from '@/global/requests/get-public-lang';

const AuctionTimer = dynamic(() => import('./auction-timer'));
const AuctionButton = dynamic(() => import("./auction-button"));

type Props = {
  securePaymentTxt: string;
  discountTxt: string;
};


export function AuctionPreview(props: Props) {

  const { securePaymentTxt, discountTxt } = props;

  // ssr
  const auction = useGetAuction();
  const { data: langData } = useGetPublicLang();

  // csr
  const auctionState = useAuctionStore(state => ({
    isConnectedCurrentUser: state.isConnectedCurrentUser,
  }));

  // notify hook
  const pushNotify = useNotify();

  useEffect(() => {
    const result = location.search.split('=')[1] as 'success' | 'failed';

    switch (result) {
      case 'failed':
        pushNotify.notify('Auksiona qoşulmadınız!', 'error');
        break;

      case 'success':
        pushNotify.notify('Auksiona qoşuldunuz!', 'success');
        break;
    }
  }, []);

  const Timer = useMemo(() => {
    return (
      auction.data.auctionStatus.id !== AuctionStatus.ENDED && (
        <AuctionTimer
          statusId={auction.data.auctionStatus.id}
          endDate={auction.data.endDate}
          startDate={auction.data.startDate}
          dayTxt={langData.auction.day_txt}
          hourTxt={langData.auction.hour_txt}
          minuteTxt={langData.auction.minute_txt}
          secondTxt={langData.auction.second_txt}
        />
      )
    );
  }, [auction.data.auctionStatus.id]);

  useEffect(() => {
    connectSocket({ cb: auction.refetch, notify: pushNotify.customNotify });
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 '>
      <div className='flex flex-col w-full lg:max-w-[38.5rem] gap-6'>
        <AuctionPreviewImages images={auction.data.product?.images || []} mainImage={auction.data.product?.mainImage || ""} />
        {Timer}
      </div>
      <div className='flex flex-col justify-between gap-6 w-full'>
        <AuctionPreviewHeader
          discountText={discountTxt}
          product={auction.data.product}
          startPrice={Number(auction.data.startPrice)}
          lastBid={Number(auction.data.lastOffer)}
        />

        <AuctionInfo
          minIncrease={auction.data.minIncrease}
          maxIncrease={auction.data.maxIncrease}
          startPrice={String(auction.data.startPrice)}
          endDate={auction.data.endDate}
          joinFee={String(auction.data.connectionFee)}
          lastBid={String(auction.data.lastOffer)}
          startDate={auction.data.startDate}
          liveJoinFee={String(auction.data.onlineConnectionFee)}
          winner={auction.data.winnerName}
          isConnectedCurrentUser={auctionState.isConnectedCurrentUser}
          auctionBidWarning={langData.auction.auction_bid_warning}
          auctionWinnerTxt={langData.auction.auction_winner_txt}
          auctionFreeTxt={langData.auction.auction_free_txt}
          langData={langData.auction.auction_detail}
        />
        <div className='flex flex-col gap-3 w-full'>
          {
            auction.data.auctionStatus.id === AuctionStatus.ENDED ? <></> : <AuctionButton
              lastOffer={auction.data.lastOffer}
              minIncrease={auction.data.minIncrease}
              aggId={auction.data.aggregateId}
              auctionId={auction.data.id}
              auctionStatus={auction.data.auctionStatus}
              connectionFee={auction.data.connectionFee}
              onlineConnectFee={auction.data.onlineConnectionFee}
              isConnectedCurrentUser={auctionState.isConnectedCurrentUser}
            />
          }

          <div className='w-full flex justify-between'>
            <div className='w-full flex flex-col gap-3'>
              <h1 className='text-sm leading-5 font-normal text-[#191c1f]'>
                {securePaymentTxt}
              </h1>
              <PaymentMethodImages />
            </div>

            <AuctionWasSeen wasSeen={auction.data.wasSeen} />
          </div>
        </div>
      </div>
    </div>
  );
}
