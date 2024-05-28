import { PiNotebook, PiPackage, PiTruck, PiHandshake } from "react-icons/pi"

export function ProductTracking() {
    return (
        <div className="flex flex-col gap-6 p-3 md:p-6">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-y-2 md:gap-0 bg-[#FDFAE7] border border-solid border-[#F7E99E] rounded p-3 md:p-6">
                <div className="">
                    <h1 className="text-xl font-normal leading-7 text-[#191c1f]">#96459761</h1>
                    <div className="flex flex-wrap md:flex-nowrap gap-2 items-center">
                        <span className="text-sm font-normal leading-5 text-[#475156]">4 Products</span>
                        <span className="text-sm font-normal leading-5 text-[#475156]">•</span>
                        <p className="text-xs font-normal leading-5 text-[#475156]">Order Placed in 17 Jan, 2021 at 7:32 PM</p>
                    </div>
                </div>
                <p className="text-[28px] font-semibold leading-8 text-[#2DA5F3]">$1199.00</p>
            </div>
            <p className="text-sm font-normal leading-5 text-[#475156]">
                Order expected arrival <span className="font-medium text-[#191c1f]">23 Jan, 2021</span>
            </p>
            <div className="w-full">
                <div className="max-w-[722px] mx-auto">
                    <div className="w-full h-6 relative flex items-center">
                        <div className="w-full mx-[10px] h-2 relative bg-[#FFE7D6] rounded-[6.25rem]">
                            <div className="absolute top-0 h-[inherit] left-0 w-[32%] bg-[#FA8232] rounded-[6.25rem]"></div>
                        </div>
                        <div className="flex absolute top-0 left-0 w-full justify-between">
                            <div className="w-6 h-6 rounded-[50%] bg-[#FA8232] border-2 border-solid border-[#FA8232]"></div>
                            <div className="w-6 h-6 rounded-[50%] bg-white border-2 border-solid border-[#FA8232]"></div>
                            <div className="w-6 h-6 rounded-[50%] bg-white border-2 border-solid border-[#FA8232]"></div>
                            <div className="w-6 h-6 rounded-[50%] bg-white border-2 border-solid border-[#FA8232]"></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-6">
                    <div className="col-span-1">
                        <div className="w-full flex justify-center mb-3">
                            <PiNotebook size="32px" color="#2DB324" />
                        </div>
                        <div className="w-full text-center">
                            <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Order Placed</h1>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full flex justify-center mb-3">
                            <PiPackage size="32px" color="#FA8232" />
                        </div>
                        <div className="w-full text-center">
                            <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Packaging</h1>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full flex justify-center mb-3">
                            <PiTruck className="opacity-60" size="32px" color="#FA8232" />
                        </div>
                        <div className="w-full text-center">
                            <h1 className="text-sm font-medium leading-5 text-[#191c1f] opacity-60">On The Road</h1>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full flex justify-center mb-3">
                            <PiHandshake className="opacity-60" size="32px" color="#FA8232" />
                        </div>
                        <div className="w-full text-center">
                            <h1 className="text-sm font-medium opacity-60 leading-5 text-[#191c1f]">On The Road</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}