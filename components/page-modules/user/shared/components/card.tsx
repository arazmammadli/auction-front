'use client';
import { Dropdown } from 'antd';
import { Switch } from 'antd';
import { PiDotsThree, PiCopy } from 'react-icons/pi';
import { ICard } from '../../pages/cards/data/cards.type';
import classNames from 'classnames';
import { useConfirmCards } from '@/page-modules/user/pages/cards/hooks/confirm-cards.hook';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useActivateCards } from '@/page-modules/user/pages/cards/hooks/activate-cards.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { useDeleteCards } from '@/page-modules/user/pages/cards/hooks/delete-cards.hook';
import { useCardsStore } from '../../pages/cards/data/cards.store';

type Props = {
  withToggle?: boolean;
  card_number_text: string;
  card_confirmed_status: string;
  payment_confirm_btn: string;
  card_not_confirmed: string;
  card_delete_text: string;

} & ICard;

export function PaymentCard(props: Props) {
  const { withToggle = true, ...res } = props;

  const cardsState = useCardsStore((state) => ({
    onChangeStatus: state.onChaneStatus,
  }));
  const { name, content, confirmed = true, status, public_token, userId } = props;
  const confirmCardsRequest = useConfirmCards();
  const activateCardsRequest = useActivateCards();
  const deleteCardsRequest = useDeleteCards();
  const pushNotify = useNotify();

  useEffect(() => {
    if (confirmCardsRequest.isSuccess && confirmCardsRequest.data) {
      redirect(confirmCardsRequest.data.card_register_link);
    }
  }, [confirmCardsRequest.isSuccess]);

  const confirmCards = async () => {
    pushNotify.promiseNotify(
      confirmCardsRequest.mutateAsync({ token: public_token, userId }),
      {
        error: (data) => data.response.data.msg,
        loadingText: 'Kartınız təsdiqlənir...',
        successText: 'Kartınız təsdiqləndi.',
      },
    );
  };

  const switchCards = async (checked: boolean) => {
    pushNotify.promiseNotify(activateCardsRequest.mutateAsync(public_token), {
      error: (data) => data.response.data.msg,
      loadingText: checked ? 'Kartınız aktiv edilir.' : 'Kartınız deaktiv edilir.',
      successText: checked ? 'Kartınız aktiv edildi.' : 'Kartınız deaktiv edildi.',
    });
  };

  const deleteCards = async () => {
    pushNotify.promiseNotify(deleteCardsRequest.mutateAsync(public_token), {
      error: (data) => data.response.data.msg,
      loadingText: 'Deleted...',
      successText: 'Kartınız uğurla silindi.',
    });
  };

  return (
    <div
      className={classNames('w-full rounded min-h-[12.75rem]', {
        ['bg-[radial-gradient(236.15%_138.52%_at_-0.00%_0%,#1B6392_0%,#124261_100%)]']:
          !confirmed,
        ['bg-[radial-gradient(236.15%_138.52%_at_0%_0%,#248E1D_0%,#2DB224_100%)]']:
          confirmed,
      })}
    >
      <div className='flex flex-col min-h-[inherit] p-6 justify-between'>
        <div className='flex flex-col gap-6'>
          {withToggle && (
            <div className='flex justify-between items-center'>
              {confirmed ? (
                <h1 className='text-base font-semibold leading-6 text-white'>{name}</h1>
              ) : (
                <div
                  onClick={confirmCards}
                  className='bg-[#FA8232] cursor-pointer rounded py-1 px-3'
                >
                  <span className='text-sm leading-5 font-medium text-white'>
                    {props.payment_confirm_btn}
                  </span>
                </div>
              )}
              <Dropdown
                overlayClassName='min-w-[8.75rem_!important] bg-white py-2 rounded-sm shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] border border-solid border-[#E4E7E9]'
                dropdownRender={() => (
                  <div className='flex flex-col items-start'>
                    <button onClick={deleteCards} type='button' className='py-2 pl-4'>
                      <span className='text-sm font-normal leading-5 text-[#5F6C72]'>
                        {props.card_delete_text}
                      </span>
                    </button>
                  </div>
                )}
                trigger={['click']}
              >
                <div className='cursor-pointer'>
                  <PiDotsThree size='24px' color='#fff' />
                </div>
              </Dropdown>
            </div>
          )}
          {content ? (
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-medium leading-4 uppercase text-white opacity-70'>
                {props.card_number_text}
              </h3>
              <div className='flex flex-row items-center gap-[6px]'>
                <p className='text-xl font-normal leading-7 text-white'>{content}</p>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className={classNames('flex items-center', {
            ['justify-between']: confirmed,
            ['justify-start']: !confirmed,
          })}
        >
          {withToggle && confirmed && (
            <div className=''>
              <Switch
                className='bg-[#E4E7E9_!important] aria-checked:bg-[#FA8232_!important]'
                onChange={switchCards}
                checked={status}
              />
            </div>
          )}
          <div
            className={classNames('rounded py-1 px-3', {
              ['bg-[#FA8232]']: confirmed,
              ['bg-red-600']: !confirmed,
            })}
          >
            <span className='text-sm leading-5 font-medium text-white'>
              {confirmed ? props.card_confirmed_status : props.card_not_confirmed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
