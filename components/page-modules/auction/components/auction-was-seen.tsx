import { PiEye } from 'react-icons/pi';

type Props = {
  wasSeen: number;
};

export function AuctionWasSeen(props: Props) {
  const { wasSeen } = props;

  return (
    <div className='flex gap-2 items-center'>
      <PiEye color='gray' />
      <span className='text-gray-500 text-[12px]'>{wasSeen}</span>
    </div>
  );
}
