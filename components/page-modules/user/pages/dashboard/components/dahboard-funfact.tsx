import { PiRocket, PiReceipt, PiPackage } from "react-icons/pi";

type Props = {
    type: "total" | "pending" | "completed";
    orderCount: string
}

export function FunFact({ orderCount, type }: Props) {
    const checkType = () => {
        switch (type) {
            case "total":
                return (
                    <div className="flex flex-row gap-4 items-center p-4 rounded bg-[#EAF6FE]">
                        <div className="p-3 rounded-sm bg-white">
                            <PiRocket size="32px" color="#2DA5F3" />
                        </div>
                        <div className="w-full">
                            <h1 className="text-xl font-semibold leading-7 text-[#191c1f] mb-1">{orderCount}</h1>
                            <span className="text-sm font-normal leading-5 text-[#475156]">Total Orders</span>
                        </div>
                    </div>
                )
            case "pending":
                return (
                    <div className="flex flex-row gap-4 items-center p-4 rounded bg-[#FFF3EB]">
                        <div className="p-3 rounded-sm bg-white">
                            <PiReceipt size="32px" color="#FA8232" />
                        </div>
                        <div className="w-full">
                            <h1 className="text-xl font-semibold leading-7 text-[#191c1f] mb-1">{orderCount}</h1>
                            <span className="text-sm font-normal leading-5 text-[#475156]">Pending Orders</span>
                        </div>
                    </div>
                )
            case "completed":
                return (
                    <div className="flex flex-row gap-4 items-center p-4 rounded bg-[#EAF7E9]">
                        <div className="p-3 rounded-sm bg-white">
                            <PiPackage size="32px" color="#2DB224" />
                        </div>
                        <div className="w-full">
                            <h1 className="text-xl font-semibold leading-7 text-[#191c1f] mb-1">{orderCount}</h1>
                            <span className="text-sm font-normal leading-5 text-[#475156]">Completed Orders</span>
                        </div>
                    </div>
                )
        }
    }

    return <>
        {checkType()}
    </>
}