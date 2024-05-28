import { Button } from "@/components/common/button";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

export function OrderSummary() {
    return (
        <div className="w-full rounded pb-5 border border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-3 md:px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Order Summery</h1>
            </div>
            <div className="flex flex-col gap-4 px-3 md:px-6 mb-6">
                <div className="flex flex-row gap-4 items-center">
                    <div className="">
                        <Image src="/assets/images/tv.png" alt="Camera" width="64" height="64" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-sm font-normal leading-5 text-[#191c1f]">Canon EOS 1500D DSLR Camera Body+ 18-...</h1>
                        <div className="flex flex-row gap-1">
                            <span className="text-sm font-normal leading-5 text-[#5f6c72]">1 x</span>
                            <p className="text-sm font-semibold leading-5 text-[#2da5f3]">$70</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-6 mb-6">
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex flex-row justify-between items-center">
                        <span className="block text-sm font-normal leading-5 text-[#5F6C72]">Sub-total</span>
                        <p className="text-sm font-medium leading-5 text-[#191c1f]">$320</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <span className="block text-sm font-normal leading-5 text-[#5F6C72]">Shipping</span>
                        <p className="text-sm font-medium leading-5 text-[#191c1f]">Free</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <span className="block text-sm font-normal leading-5 text-[#5F6C72]">Discount</span>
                        <p className="text-sm font-medium leading-5 text-[#191c1f]">$24</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <span className="block text-sm font-normal leading-5 text-[#5F6C72]">Tax</span>
                        <p className="text-sm font-medium leading-5 text-[#191c1f]">$61.99</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#E4E7E9] mb-4"></div>
                <div className="flex flex-row justify-between items-center">
                    <span className="block text-base font-normal leading-6 text-[#191c1f]">Total</span>
                    <p className="text-base font-semibold leading-6 text-[#191c1f]">$357.99 USD</p>
                </div>
            </div>
            <div className="px-3 md:px-6">
                <Button width="w-full" type="button">
                    <span className="text-base font-bold leading-[56px] text-white uppercase">Place order</span>
                    <PiArrowRight size="24px" color="#fff" />
                </Button>
            </div>
        </div>
    )
}