'use client';
import { PaymentCard } from './card';
import { PiArrowRightBold } from 'react-icons/pi';
import { useCreateCards } from '@/page-modules/user/pages/cards/hooks/create-cards.hook';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useCardsStore } from '../../pages/cards/data/cards.store';
import { useGetCards } from '../../pages/cards/hooks/get-cards.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { Button } from '@/components/common/button';
import Loading from '@/components/common/loading';
import { useGetPublicLang } from '@/global/requests/get-public-lang';

export function PaymentOption() {
  const cardsAddRequest = useCreateCards();
  const { isLoading } = useGetCards();
  const [cards] = useCardsStore((state) => [state.cards]);
  const pushNotify = useNotify();
  const { data: langData } = useGetPublicLang();

  useEffect(() => {
    if (cardsAddRequest.isSuccess && cardsAddRequest.data?.link) {
      redirect(cardsAddRequest.data.link);
    }
  }, [cardsAddRequest.isSuccess]);

  const addCards = async () => {
    pushNotify.promiseNotify(cardsAddRequest.mutateAsync(), {
      error: (data) => data.response.data.msg,
      loadingText: 'Kartın əlavə edilməsi prosesi başladı.',
      successText: 'Yönləndirilsiniz.',
    });
  };

  if (typeof langData === "undefined") return <h1>Cards no content.</h1>

  return (
    <div className='w-full rounded border border-solid border-[#E4E7E9]'>
      <div className='flex justify-between items-center py-[10px] px-3 md:px-6 rounded-t border-b border-solid border-[#E4E7E9]'>
        <h1 className='text-sm font-medium leading-5 text-[#191c1f] uppercase'>
          {langData.dashboard.payment_option.payment_option_head}
        </h1>
        <button
          onClick={addCards}
          type='button'
          className='flex items-center text-[#FA8232] gap-2 py-[6px]'
        >
          <span className='text-sm font-semibold leading-5'>{langData.dashboard.payment_option.add_payment_card}</span>
          <PiArrowRightBold size='20px' />
        </button>
      </div>
      {
        isLoading && <div className="w-full flex justify-center items-center">
          <Loading />
        </div>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 p-3 md:p-6'>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={index} className='col-span-1'>
              <PaymentCard {...card} payment_confirm_btn={langData.dashboard.payment_option.payment_confirm_btn} card_confirmed_status={langData.dashboard.payment_option.card_confirmed_status} card_not_confirmed={langData.dashboard.payment_option.card_not_confirmed} card_number_text={langData.dashboard.payment_option.card_number_text} card_delete_text={langData.dashboard.payment_option.card_delete_text} />
            </div>
          ))
        ) : (
          <div>
            <h2 className='text-lg font-bold mb-4'>{langData.dashboard.payment_option.no_card_text}</h2>

            <Button onClick={addCards} type='button' width='w-full'>
              <span className='text-sm font-bold py-4 uppercase text-white'>
                {langData.dashboard.payment_option.add_payment_card}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
