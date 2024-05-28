import Link from 'next/link';
import { AuctionCardImage } from './auction-card-image';
import { AuctionCardStatus } from './auction-card-status';
import {
  IAuction,
  IAuctionStatusType,
  IProduct,
  IProductImage,
} from '../data/auction.type';
import { useParams } from 'next/navigation';
import { LangType } from '@/global/types/lang.type';
import { useGetPublicLang } from '@/global/requests/get-public-lang';

type Props = {
  mainImage: IProductImage;
  buying: IProduct['buying'];
  auctionStatus: IAuctionStatusType;
  slug: IAuction['slug'];
};

export function AuctionCardHeader(props: Props) {
  const { auctionStatus, buying, mainImage, slug } = props;

  // hooks
  const params = useParams();
  const lang = params.lang as LangType;
  const { data: langData } = useGetPublicLang();
  return (
    <Link
      className='relative flex overflow-hidden rounded-xl'
      href={`/${lang}/auction/` + slug}
      as={`/${lang}/auction/` + slug}
      locale={lang}
    >
      <AuctionCardImage mainImage={mainImage} />
      <AuctionCardStatus
        liveStatusTxt={langData?.auction.auction_live_txt as string}
        soonStatusTxt={langData?.auction.auction_soon_txt as string}
        soldStatusTxt={langData?.auction.auction_sold_txt as string}
        auctionStatus={auctionStatus}
        buying={buying} 
        />
    </Link>
  );
}
