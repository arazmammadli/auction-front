import classNames from 'classnames';
import { AuctionStatus, IAuctionStatusType } from '../data/auction.type';

type Props = {
  auctionStatus: IAuctionStatusType;
  buying: number;
  liveStatusTxt:string;
  soonStatusTxt:string;
  soldStatusTxt:string;
};

export function AuctionCardStatus(props: Props) {
  const { auctionStatus, buying,liveStatusTxt,soldStatusTxt,soonStatusTxt } = props;

  return auctionStatus.id == AuctionStatus.ENDED ? (
    <div className='absolute top-0 right-3'>
      <span className="inline-flex items-center rounded-md bg-[rgb(34_197_94_/_0.1)] px-4 py-1 border border-[rgb(34_197_94_/_0.1)] uppercase text-xs font-medium text-green-600 ring-1 ring-inset ring-red-600/10">{soldStatusTxt}</span>
    </div>
  ) : (
    <>
      <p className='flex gap-3 items-center absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
        <span className='text-lg font-bold text-white line-through'>
          {buying + ' AZN'}
        </span>
      </p>
      <span
        className={classNames(
          'absolute top-0 right-0 m-2 rounded-full uppercase px-2 text-center text-sm font-medium text-white',
          {
            ['bg-green-500']: auctionStatus.id == AuctionStatus.LIVE,
            ['bg-orange-500']: auctionStatus.id != AuctionStatus.LIVE,
          },
        )}
      >
        {auctionStatus.id == AuctionStatus.LIVE ? liveStatusTxt : null}
        {auctionStatus.id == AuctionStatus.SOON ? soonStatusTxt : null}
      </span>
    </>
  );
}
