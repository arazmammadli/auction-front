"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CustomLink } from "@/components/common/link";
import { PiArrowRightBold } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useGetWidgets } from "../hooks/get-widgets.hook";
import { useWidgetStore } from "../data/widget.store";

export default function WidgetConatiner() {
    const { isLoading } = useGetWidgets();
    const [widgets] = useWidgetStore((state) => [state.widgets]);

    return (
        <div className="w-full">
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                delay: 4500,
                disableOnInteraction: false
            }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]}>
                {
                    widgets.map((widget) => (
                        <SwiperSlide key={widget.id}>
                            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-[11rem]">
                                <Image
                                    src={widget.image}
                                    alt={widget.title}
                                    priority
                                    fill
                                    className="inset-0 -z-10 object-cover object-right md:object-center"
                                />
                                <div
                                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                        }}
                                    />
                                </div>
                                <div
                                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                        }}
                                    />
                                </div>
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div className="mx-auto max-w-2xl lg:mx-0">
                                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl pt-5 relative before:content-[''] before:absolute before:top-0 before:h-[5px] before:w-12 before:bg-[#DE732D] before:left-1 before:right-auto">{widget.title}</h2>
                                        <div className="mt-6">
                                            <CustomLink width="w-fit" href="/">
                                                <span className="uppercase text-xs md:text-base font-bold leading-10 md:leading-[56px] text-white">{widget.btnName}</span>
                                                <PiArrowRightBold color="#fff" className="w-[18px_!important] h-[18px_!important] md:w-[22px_!important] md:h-[22px_!important]" />
                                            </CustomLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
};