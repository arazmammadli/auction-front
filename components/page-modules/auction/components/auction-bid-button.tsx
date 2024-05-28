'use client';

import { Button } from '@/components/common/button';
import { InputNumber } from 'antd';
import { PiPlus } from 'react-icons/pi';
import { IAuction, IAuctionBid } from '../data/auction.type';
import { useAuctionBid } from '../hooks/auction-bid.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { useRef } from 'react';
import { Toast } from '@/components/common/toast';
import { auctionErrorMessage } from '../data/auction.repository';

type Props = {
  auctionId: IAuction['id'];
  lastOffer: IAuction['lastOffer'];
  minIncrease: IAuction['minIncrease'];
  btnTxt: string;
};

export default function AuctionBidButton(props: Props) {
  const { auctionId, lastOffer, btnTxt, minIncrease } = props;

  // ref
  const offerInputRef = useRef<HTMLInputElement>(null);

  // requests
  const bidAuction = useAuctionBid();

  // hooks
  const pushNotify = useNotify();

  function onBid() {
    const postData: IAuctionBid = {
      auctionId,
      offeredPrice: Number(offerInputRef.current?.value),
    };

    pushNotify.promiseNotify(bidAuction.mutateAsync(postData), {
      error: (data) => {
        const statusCode = data.response?.data?.statusCode as keyof typeof auctionErrorMessage
        return auctionErrorMessage[statusCode]
      },
      loadingText: 'Ödəniş edilir...',
      successText: 'Uğurlu!',
    });
  }

  return (
    <div className='flex flex-col gap-3 md:gap-0 md:flex-row justify-between w-full'>
      <InputNumber
        ref={offerInputRef}
        type='number'
        addonAfter='₼'
        defaultValue={lastOffer}
      />
      <div className='grid gird-cols-3'>
        <Button onClick={onBid} type='button' bgColor='bg-[#FA8232]' width='w-full'>
          <span className='text-base font-bold leading-[56px] uppercase text-white'>
            {btnTxt}
          </span>
          <PiPlus color='white' size='1.5em' />
        </Button>
      </div>

      <Toast />
    </div>
  );
};
