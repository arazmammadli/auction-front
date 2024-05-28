import Image from "next/image";
import { Rating } from "@/components/common/rate";
import { Rate } from "antd";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";

export function ProductReview() {
    return (
        <div className="w-full p-3 md:p-10">
            <div className="block w-full mb-4">
                <div className="w-full">
                    <h2 className="text-xl font-normal leading-7 text-[#191c1f]">2 review</h2>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full py-6 border-b border-solid border-[#E4E7E9]">
                        <div className="flex flex-row items-start gap-3 mb-3">
                            <Image src="/assets/images/review.png" width="40" height="40" alt="Jacob Jones" />
                            <div className="block w-full">
                                <div className="flex flex-row items-center gap-[6px]">
                                    <h1 className="text-base font-medium leading-5 text-[#191c1f]">Jacob Jones</h1>
                                    <span className="text-base font-normal leading-5 text-[#77878F]">•</span>
                                    <p className="text-base font-normal leading-5 text-[#77878F]">26 Apr, 2021</p>
                                </div>
                                <div className="w-max">
                                    <Rating value={5} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm font-normal leading-5 italic text-[#475156]">In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                        </div>
                    </div>
                    <div className="w-full py-6">
                        <div className="flex flex-row items-start gap-3 mb-3">
                            <Image src="/assets/images/review.png" width="40" height="40" alt="Jacob Jones" />
                            <div className="block w-full">
                                <div className="flex flex-row items-center gap-[6px]">
                                    <h1 className="text-base font-medium leading-5 text-[#191c1f]">Jacob Jones</h1>
                                    <span className="text-base font-normal leading-5 text-[#77878F]">•</span>
                                    <p className="text-base font-normal leading-5 text-[#77878F]">26 Apr, 2021</p>
                                </div>
                                <div className="w-max">
                                    <Rating value={5} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm font-normal leading-5 italic text-[#475156]">In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="mb-6">
                    <h1 className="text-xl font-normal leading-7 text-[#191c1f]">Add a review</h1>
                </div>
                <div className="w-full mb-6">
                    <h3 className="text-base font-normal text-[#191C1F] mb-1">Your rating</h3>
                    <div className="w-max">
                        <Rate count={5} />
                    </div>
                </div>
                <div className="w-full">
                    <form action="" className="flex flex-col gap-6">
                        <div className="w-full flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2">
                                <Input label="Full Name" type="text" name="fullname" id="fullname" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <Input label="Email Address" type="email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="w-full">
                           <textarea name="review" id="review" className="resize-none w-full focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] rounded-sm border border-solid border-[#E4E7E9] pt-3 pl-4 h-[7.75rem]" placeholder="What’s your thought about this blog..."></textarea> 
                        </div>
                        <div className="w-full">
                            <Button type="submit" width="w-fit" bgColor="bg-[#FA8232]">
                                <span className="text-sm font-bold leading-[48px] uppercase text-white">post Commends</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}