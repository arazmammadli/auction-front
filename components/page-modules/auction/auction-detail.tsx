"use client"
import { Container } from '@/components/common/container';
import { AuctionPreview } from './components/auction-preview';
import { useGetPublicLang } from '@/global/requests/get-public-lang';
import { Toast } from '@/components/common/toast';
import dynamic from 'next/dynamic';

const AuctionBottom = dynamic(() => import("./components/auction-bottom"));

export function AuctionDetail() {
  
  // get multi lang data
  const { data: langData } = useGetPublicLang();

  return (
    <>
      <Container>
        <div className='pt-8 w-full'>
          <AuctionPreview
            securePaymentTxt={langData?.auction.auction_detail.secure_payment_txt ?? ""}
            discountTxt={langData?.auction.auction_detail.auction_discount_txt ?? ""}
          />
        </div>
        <AuctionBottom
          participantsHead={langData?.auction.auction_detail.participants_txt ?? ""}
          descriptionHead={langData?.auction.auction_detail.description_txt ?? ""}
        />
      </Container>
      <Toast/>
    </>
  );
};
