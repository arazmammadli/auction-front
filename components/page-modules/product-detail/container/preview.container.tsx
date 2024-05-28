"use client";
import { useState } from "react";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { OutlinedButton } from "@/components/common/outlined.button";
import Image from "next/image";
import { Rating } from "@/components/common/rate";
import { images } from "@/components/page-modules/home/data/home.repository";
import { colors } from "@/components/page-modules/home/data/home.repository";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { PiShoppingCartSimpleLight, PiCopyLight, PiMinus, PiPlus } from "react-icons/pi";
import { BsHeart, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import classNames from "classnames";

import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from "next/link";
import { PaymentMethodImages } from "@/components/common/payment.image";

let selectColor = "w-11 h-11 flex justify-center items-center  border-2 border-solid border-[#FA8232] rounded-[50%]";

export function ProductPreviewContainer() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    return (
        <div className="flex flex-col lg:flex-row gap-14 rounded">
            <div className="flex flex-col w-full lg:max-w-[38.5rem] gap-6">
                <div className="w-full">
                    <Swiper
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Thumbs, Navigation]}
                        grabCursor={true}
                    >
                        {
                            images.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <Image src={`/assets/images/${i.img}`} className="w-full lg:min-w-[38.5rem]" width="616" height="464" alt={`Mac ${i.id}`} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="w-full">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={8}
                        navigation={true}
                        watchSlidesProgress={true}
                        slidesPerView={6}
                        modules={[Thumbs, Navigation]}
                    >
                        {
                            images.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <Image src={`/assets/images/${i.img}`} className="w-full cursor-pointer" width="96" height="96" alt={`Mac ${i.id}`} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-6">
                <div className="w-full">
                    <div className="mb-4">
                        <div className="flex flex-row items-baseline gap-[6px]">
                            <Rating value={5} />
                            <p className="text-sm text-[#5f6c72] font-normal leading-5">(21,671 User feedback)</p>
                        </div>
                        <h1 className="text-xl text-[#191c1f] font-normal leading-7 mt-2">2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h1>
                    </div>
                    <div className="grid md:grid-cols-2">
                        <div className="flex flex-row justify-between md:justify-start items-baseline gap-1">
                            <span className="text-sm font-semibold leading-5 text-[#5F6C72]">Sku:</span>
                            <strong>A264671</strong>
                        </div>
                        <div className="flex flex-row justify-between md:justify-start items-baseline gap-1">
                            <span className="text-sm font-semibold leading-5 text-[#5F6C72]">Availability:</span>
                            <strong className="text-[#2DB224]">In Stock</strong>
                        </div>
                        <div className="flex flex-row justify-between md:justify-start items-baseline gap-1">
                            <span className="text-sm font-semibold leading-5 text-[#5F6C72]">Brand:</span>
                            <strong>Apple</strong>
                        </div>
                        <div className="flex flex-row justify-between md:justify-start items-baseline gap-1">
                            <span className="text-sm font-semibold leading-5 text-[#5F6C72]">Category:</span>
                            <strong>Electronics Devices</strong>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-2xl font-semibold text-[#2da5f3] leading-8">$1699</p>
                        <p className="text-lg font-normal text-[#77878F] leading-6"><del>$1999.00</del></p>
                    </div>
                    <Badge color="#EFD33D" text="21% OFF" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-1">
                        <label htmlFor="color-change" className="block text-sm font-normal leading-5 text-[#191c1f] mb-2">
                            Color
                        </label>
                        <div className="flex flex-row gap-3 items-baseline">
                            {
                                colors.map((c, index) => (
                                    <div key={c.id} onClick={() => setSelectedColor(colors[index])} className={classNames("default classes", {
                                        [selectColor]: c.name === selectedColor.name
                                    })}>
                                        <button type="button" className={`min-w-[32px] h-8 ${c.class} shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12)_inset,0px_-2px_6px_0px_rgba(255,255,255,0.24)_inset] rounded-[50%]`}></button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="product-size" className="block text-sm font-normal leading-5 text-[#191c1f] mb-2">
                            Size
                        </label>
                        <div className="">
                            <select name="size" id="size" className="py-3 px-4 w-full bg-white rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] outline-none border border-solid border-[#E4E7E9]">
                                <option value="">14-inch Liquid Retina XDR display</option>
                                <option value="">14-inch Liquid Retina XDR display</option>
                                <option value="">14-inch Liquid Retina XDR display</option>
                                <option value="">14-inch Liquid Retina XDR display</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="product-memory" className="block text-sm font-normal leading-5 text-[#191c1f] mb-2">
                            Memory
                        </label>
                        <div className="">
                            <select name="memory" id="memory" className="py-3 px-4 w-full bg-white focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] rounded-sm outline-none border border-solid border-[#E4E7E9]">
                                <option value="">16GB unified memory</option>
                                <option value="">16GB unified memory</option>
                                <option value="">16GB unified memory</option>
                                <option value="">16GB unified memory</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="product-storage" className="block text-sm font-normal leading-5 text-[#191c1f] mb-2">
                            Storage
                        </label>
                        <div className="">
                            <select name="storage" id="storage" className="py-3 px-4 w-full bg-white focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] rounded-sm outline-none border border-solid border-[#E4E7E9]">
                                <option value="">1TV SSD Storage</option>
                                <option value="">1TV SSD Storage</option>
                                <option value="">1TV SSD Storage</option>
                                <option value="">1TV SSD Storage</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
                    <div className="flex min-w-[124px] flex-row max-h-[3.5rem] justify-between items-center py-4 px-5 rounded border-2 border-solid border-[#E4E7E9]">
                        <button type="button">
                            <PiMinus size="16px" color="#191c1f" />
                        </button>
                        <p className="text-base font-normal leading-6 text-[#475156]">01</p>
                        <button type="button">
                            <PiPlus size="16px" color="#191c1f" />
                        </button>
                    </div>
                    <div className="md:basis-[19.375rem]">
                        <Button type="button" bgColor="bg-[#FA8232]" width="w-full">
                            <span className="text-base font-bold leading-[56px] uppercase text-white">Add to card</span>
                            <PiShoppingCartSimpleLight color="white" size="1.5em" />
                        </Button>
                    </div>
                    <OutlinedButton type="link" href="/checkout" borderClr="border-[#FA8232]">
                        <span className="text-base font-bold text-[#FA8232] leading-[3.25rem] uppercase">Buy now</span>
                    </OutlinedButton>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <button type="button" className="flex gap-[6px] items-center">
                            <BsHeart size="24px" color="#475156" />
                            <span className="text-sm font-normal leading-5 text-[#475156]">Add to Wishlist</span>
                        </button>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center">
                        <p className="text-sm text-[#475156] font-normal leading-5">Share product:</p>
                        <div className="flex flex-row items-center gap-3">
                            <PiCopyLight size="24px" color="#5F6C72" />
                            <Link href="https://www.facebook.com/" className="group">
                                <BsFacebook size="16px" className="group-hover:text-[#FA8232]" />
                            </Link>
                            <Link href="https://twitter.com/home" className="group">
                                <BsTwitter size="16px" className="group-hover:text-[#FA8232]" />
                            </Link>
                            <Link href="https://www.pinterest.com/" className="group">
                                <FaPinterestP size="16px" className="group-hover:text-[#FA8232]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-sm leading-5 font-normal text-[#191c1f]">100% Guarantee Safe Checkout</h1>
                    <PaymentMethodImages />
                </div>
            </div>
        </div>
    )
}