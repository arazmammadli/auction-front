import { RiErrorWarningLine } from "react-icons/ri";
import { IAuction, IAuctionDetailLangData } from "../data/auction.type";
import classNames from "classnames";

type Props = {
  startDate: string;
  endDate: string;
  joinFee: string;
  liveJoinFee: string;
  lastBid: string;
  startPrice: string;
  minIncrease: number;
  maxIncrease: number;
  winner?: string;
  isConnectedCurrentUser: IAuction['isConnectedCurrentUser'];
  auctionBidWarning: string;
  auctionWinnerTxt: string;
  auctionFreeTxt:string;
  langData:IAuctionDetailLangData;
};

export function AuctionInfo(props: Props) {
  const {
    endDate,
    joinFee,
    lastBid,
    liveJoinFee,
    startDate,
    startPrice,
    maxIncrease,
    minIncrease,
    winner,
    isConnectedCurrentUser,
    auctionBidWarning,
    auctionFreeTxt,
    auctionWinnerTxt,
    langData
  } = props;

  return (
    <div className='flex flex-col gap-3 my-3'>
      {winner ? (
        <div className='flex justify-between'>
          <p className='font-bold text-green-700'>{auctionWinnerTxt}:</p>
          <p className='text-center text-green-700 underline'>{winner}</p>
        </div>
      ) : null}
      <div className='flex justify-between'>
        <p>{langData.start_date_txt}:</p>
        <p className='text-center'>
          {startDate.split('T')[0]} {startDate.split('T')[1]}
        </p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.end_date_txt}:</p>
        <p className='text-center'>
          {endDate.split('T')[0]} {endDate.split('T')[1]}
        </p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.starting_price_txt}:</p>
        <p>{Number(startPrice).toFixed(2)} AZN</p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.joining_fee}:</p>
        <p>{joinFee == '0' ? auctionFreeTxt : Number(joinFee).toFixed(2) + 'AZN'}</p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.live_connection_fee}:</p>
        <p>{liveJoinFee == '0' ? auctionFreeTxt : Number(liveJoinFee).toFixed(2) + 'AZN'}</p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.minimum_bid_txt}:</p>
        <p>{(minIncrease + Number(lastBid)).toFixed(2)} AZN</p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.maximum_offer_txt}:</p>
        <p>{(maxIncrease + Number(lastBid)).toFixed(2)} AZN</p>
      </div>
      <div className='flex justify-between'>
        <p>{langData.last_offer_txt}:</p>
        <p>{lastBid} AZN</p>
      </div>
      <div className={classNames("justify-start", {
        ["flex"]: isConnectedCurrentUser,
        ["hidden"]: !isConnectedCurrentUser,
      })}>
        <div className="flex items-center gap-2">
          <RiErrorWarningLine size="22px" color="#FF9900" />
          <p>{auctionBidWarning}</p>
        </div>
      </div>
    </div>
  );
}
