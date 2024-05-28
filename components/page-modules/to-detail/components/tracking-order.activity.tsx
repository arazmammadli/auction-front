import { PiChecks,PiUser,PiMapPinLine } from "react-icons/pi";

export function TrackingOrderActivity() {
    return (
        <div className="border-t border-solid border-[#E4E7E9] p-6">
            <div className="w-full mb-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Order Activity</h1>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                    <div className="p-3 bg-[#EAF7E9] rounded-sm border border-solid border-[#D5F0D3]">
                        <PiChecks size="24px" color="#2DB324" />
                    </div>
                    <div className="">
                        <h3 className="text-sm font-normal leading-5 text-[#191c1f] mb-2">Your order has been delivered. Thank you for shopping at Clicon!</h3>
                        <p className="text-sm font-normal leading-5 text-[#77878F]">23 Jan, 2021 at 7:32 PM</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <div className="p-3 bg-[#EAF6FE] rounded-sm border border-solid border-[#D5EDFD]">
                        <PiUser size="24px" color="#2DA5F3" />
                    </div>
                    <div className="">
                        <h3 className="text-sm font-normal leading-5 text-[#191c1f] mb-2">Our delivery man (John Wick) Has picked-up your order for delvery. </h3>
                        <p className="text-sm font-normal leading-5 text-[#77878F]">23 Jan, 2021 at 2:00 PM</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <div className="p-3 bg-[#EAF6FE] rounded-sm border border-solid border-[#D5EDFD]">
                        <PiMapPinLine size="24px" color="#2DA5F3" />
                    </div>
                    <div className="">
                        <h3 className="text-sm font-normal leading-5 text-[#191c1f] mb-2">Your order has reached at last mile hub.</h3>
                        <p className="text-sm font-normal leading-5 text-[#77878F]">22 Jan, 2021 at 8:00 AM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}