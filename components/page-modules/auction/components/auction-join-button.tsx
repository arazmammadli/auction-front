import { Button } from '@/components/common/button';
import { IAuction } from '../data/auction.type';
import { HTMLAttributes } from 'react';
import { Toast } from '@/components/common/toast';

type Props = {
  joinPrice: IAuction['startPrice'];
  btnTxt: string;
  freeTxt: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function AuctionJoinButton(props: Props) {
  const { joinPrice, btnTxt, onClick,freeTxt } = props;

  return (
    <>
      <Button onClick={onClick} type='button' width='w-full'>
        <span className='text-sm font-bold py-4 uppercase text-white'>
          {btnTxt} - {Number(joinPrice) === 0 ? freeTxt : `${joinPrice} ₼`} 
        </span>
      </Button>

      <Toast />
    </>
  );
}
