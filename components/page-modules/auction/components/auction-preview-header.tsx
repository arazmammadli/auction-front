import { useCallback } from 'react';
import { IProduct } from '../data/auction.type';
import { Badge } from '@/components/common/badge';

type Props = {
  product: IProduct;
  discountText:string;
  startPrice:number;
  lastBid:number;
};

export function AuctionPreviewHeader(props: Props) {
  const { product,discountText,lastBid,startPrice } = props;

  const getSale = useCallback(() => {
    return (100 - (((lastBid || startPrice) / product.buying) * 100)).toFixed(0) + `% ${discountText}`;
  }, [product.selling, product.buying]);

  return (
    <div className='w-full'>
      <div className='mb-4'>
        <h1 className='text-xl text-[#191c1f] font-normal leading-7 mt-2'>
          {product.name}
        </h1>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='flex flex-row items-center gap-1'>
          <p className='text-2xl font-semibold text-[#2da5f3] leading-8'>
            {lastBid || startPrice} AZN
          </p>
          <p className='flex gap-3 items-center  top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
            <span className='text-lg font-bold text-white line-through'>
              {product.buying} AZN
            </span>
          </p>
        </div>
        <Badge color='#EFD33D' text={getSale()} />
      </div>
    </div>
  );
}
