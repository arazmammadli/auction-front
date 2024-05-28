"use client";
import { Tabs } from 'antd';
import { ProductDescription } from '@/components/page-modules/product-detail/components/tabs/product.description';
import { useAuctionStore } from '../data/auction.store';
import dynamic from 'next/dynamic';

const AuctionParticipants = dynamic(() => import("./auction-participants"),{
  loading:() => <h2>Loading...</h2>
});

type Props = {
  participantsHead: string;
  descriptionHead: string;
}

export default function AuctionBottom(props: Props) {
  const { descriptionHead, participantsHead } = props;
  // state
  const auctionState = useAuctionStore((state) => ({
    participants: state.participants,
    productInfo: state.productInfo
  }))

  const items = [
    {
      key: '1',
      label: participantsHead,
      children: <AuctionParticipants participants={auctionState.participants} />,
    },

    {
      key: '2',
      label: descriptionHead,
      children: <ProductDescription info={auctionState.productInfo} />,
    }
  ];
  return (
    <div className='w-full py-[72px]'>
      <Tabs
        tabBarStyle={{ marginBottom: '0px' }}
        className='border border-solid border-[#E4E7E9]'
        defaultActiveKey='1'
        centered
        items={items}
      />
    </div>
  );
}
