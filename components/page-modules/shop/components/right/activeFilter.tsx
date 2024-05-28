import { IoClose } from "react-icons/io5";

export function ActiveFilter() {
    return (
        <div className="w-full hidden lg:flex flex-row justify-between py-3 px-6 rounded bg-[#F2F4F5] mb-6">
            <div className="flex gap-4 items-center">
                <p className="text-sm font-normal leading-5 text-[#5F6C72]">Active Filters:</p>
                <div className="flex gap-[6px] items-center">
                    <h3 className="text-sm font-normal leading-5 text-[#191c1f]">Electronics Devices</h3>
                    <div className="">
                        <IoClose size="14px" color="#929FA5" />
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-sm font-normal leading-5 text-[#5F6C72]"><strong className="text-[#191C1F]">65,867</strong> Results found.</p>
            </div>
        </div>
    )
}