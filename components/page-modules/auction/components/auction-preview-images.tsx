'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { IProductImage } from '../data/auction.type';
import Image from 'next/image';
import { Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

type Props = {
  images: IProductImage[];
  mainImage: IProductImage;
};

export function AuctionPreviewImages(props: Props) {
  const { images, mainImage } = props;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <div className='w-full'>
        {images.length > 0 ? (
          <Swiper
            className='h-[400px]'
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation]}
            grabCursor={true}
          >
            {[mainImage, ...images].map((img) => (
              <SwiperSlide key={img.id}>
                <Image
                  src={img.url}
                  className='w-full lg:min-w-[38.5rem] h-full object-cover rounded-lg'
                  width='616'
                  height='400'
                  alt={`Mac ${img.url}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Image
            src={mainImage.url}
            className='w-full lg:min-w-[38.5rem] h-[400px] object-cover rounded-lg'
            width='616'
            height='400'
            alt={`Mac ${mainImage.url}`}
          />
        )}
      </div>
      {images.length > 0 ? (
        <div className='w-full'>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={8}
            navigation={true}
            watchSlidesProgress={true}
            slidesPerView={6}
            modules={[Thumbs, Navigation]}
          >
            {[mainImage, ...images].map((img) => (
              <SwiperSlide key={img.id}>
                <Image
                  src={img.url}
                  className='w-full cursor-pointer h-[96px] object-cover'
                  width='96'
                  height='96'
                  alt={`Mac ${img.url}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </>
  );
}
