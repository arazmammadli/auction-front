'use client';
import { PiArrowRightBold } from 'react-icons/pi';
import { useCreateCards } from '@/page-modules/user/pages/cards/hooks/create-cards.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { Button } from '@/components/common/button';
import { useGetAvailableCard } from '../page-modules/user/pages/cards/hooks/get-available-card.hook';
import { useCardsStore } from '../page-modules/user/pages/cards/data/cards.store';
import { PaymentCard } from '../page-modules/user/shared/components/card';
import Loading from '../common/loading';
import { AuctionPay, IAuctionJoin } from '../page-modules/auction/data/auction.type';
import { useGetPublicLang } from '@/global/requests/get-public-lang';
import { IOrderPay, OrderPay } from '../page-modules/user/pages/orders/data/orders.type';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

type Props = {
  aggId: number;
} & (
    | {
      type: "auctionJoin"
      onPay: (payType: IAuctionJoin['payType']) => void;
    }
    | {
      type: "orderPay"
      onPay: (payType: IOrderPay['payType']) => void;
    }
  )

export function PayContainer(props: Props) {
  const { aggId, onPay, type } = props;

  // state
  const [availableCard] = useCardsStore((state) => [state.availableCard]);

  // requests
  const cardsAddRequest = useCreateCards();
  const { isLoading } = useGetAvailableCard({ aggId });
  const { data: langData } = useGetPublicLang();

  // hooks
  const pushNotify = useNotify();

  const addCards = async () => {
    pushNotify.promiseNotify(cardsAddRequest.mutateAsync(), {
      error: (data) => data.response.data.msg,
      loadingText: 'Kartın əlavə edilməsi prosesi başladı.',
      successText: 'Yönləndirilsiniz.',
    });
  };

  useEffect(() => {
    if (cardsAddRequest.isSuccess && cardsAddRequest.data?.link) {
      redirect(cardsAddRequest.data.link);
    }
  }, [cardsAddRequest.isSuccess]);

  if (typeof langData === "undefined") return <h1>No content.</h1>

  return (
    <div className='w-full rounded border border-solid border-[#E4E7E9]'>
      <div className='flex justify-between items-center py-[10px] px-3 md:px-6 rounded-t border-b border-solid border-[#E4E7E9]'>
        <h1 className='text-sm font-medium leading-5 text-[#191c1f] uppercase'>
          {langData.auction.pay_container.head}
        </h1>
        <Link
          href="/user/cards"
          className='flex items-center text-[#FA8232] gap-2 py-[6px]'
        >
          <span className='text-sm font-semibold leading-5'>{langData.auction.pay_container.switch_to_cards}</span>
          <PiArrowRightBold size='20px' />
        </Link>
      </div>
      <div>
        {isLoading && (
          <div className='flex justify-center items-center py-4'>
            <Loading />
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 p-3 md:p-6'>
          <div className='col-span-1 bg-black rounded-md flex justify-center items-center min-h-[12.75rem]'>
            <h1
              className='font-bold text-white text-lg cursor-pointer'
              onClick={() => {
                if (type === "auctionJoin") {
                  onPay(AuctionPay.OneTime)
                } else if (type === "orderPay") {
                  onPay(OrderPay.OneTime)
                }
              }}
            >
              {langData.auction.pay_container.one_time_payment}
            </h1>
          </div>

          {availableCard.status ? (
            <div onClick={() => {
              if (type === "auctionJoin") {
                onPay(AuctionPay.SavedCard);
              } else if (type === "orderPay") {
                onPay(OrderPay.SavedCard);
              }
            }} className='col-span-1'>
              <PaymentCard withToggle={false} {...availableCard} payment_confirm_btn={langData.dashboard.payment_option.payment_confirm_btn} card_confirmed_status={langData.dashboard.payment_option.card_confirmed_status} card_not_confirmed={langData.dashboard.payment_option.card_not_confirmed} card_number_text={langData.dashboard.payment_option.card_number_text} card_delete_text={langData.dashboard.payment_option.card_delete_text} />
            </div>
          ) : (
            <div>
              <h2 className='text-lg font-bold mb-4'>{langData.auction.pay_container.no_card_txt}</h2>

              <Button onClick={addCards} type='button' width='w-full'>
                <span className='text-sm font-bold py-4 uppercase text-white'>
                  {langData.auction.pay_container.add_card_txt}
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
