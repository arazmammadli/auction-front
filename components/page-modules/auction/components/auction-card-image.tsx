import Image from 'next/image';
import { IProductImage } from '../data/auction.type';

type Props = {
  mainImage: IProductImage;
};

export function AuctionCardImage(props: Props) {
  const { mainImage } = props;
  return (
    <div className='relative group w-full h-[300px] flex justify-center items-center'>
      <Image
        src={mainImage.url}
        className='mx-auto object-cover'
        alt='Phone'
        width='216'
        height='190'
      />
    </div>
  );
}
