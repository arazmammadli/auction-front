import { Input } from "@/components/common/input";
import {Button} from "@/components/common/button";
import { PiInfo,PiArrowRight } from "react-icons/pi";

export function TrackOrderContainer() {
    return (
        <div className="w-full">
            <div className="mb-8">
                <div className="mb-6 max-w-[47.5rem]">
                    <h1 className="text-[32px] font-semibold leading-10 text-[#191c1f] mb-4">Track Order</h1>
                    <p className="text-base font-normal leading-6 text-[#5f6c72]">To track your order please enter your order ID in the input field below and press the “Track Order” button. this was given to you on your receipt and in the confirmation email you should have received.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-6 max-w-[54.5rem]">
                    <div className="md:col-span-1">
                        <div className="w-full mb-4">
                            <Input label="Order ID" id="orderId" name="orderId" type="text" />
                        </div>
                        <div className="flex flex-row gap-[6px] items-center">
                            <PiInfo size="24px" color="#5F6C72"/>
                            <p className="text-sm font-normal leading-5 text-[#5F6C72]">Order ID that we sended to your in your email address.</p>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <Input label="Billing Email" id="billingEmail" name="billingEmail" type="text" />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Button width="w-fit" type="button">
                    <span className="text-base font-semibold uppercase text-white leading-[56px]">Track Order</span>
                    <PiArrowRight size="24px" color="#fff" />
                </Button>
            </div>
        </div>
    )
}