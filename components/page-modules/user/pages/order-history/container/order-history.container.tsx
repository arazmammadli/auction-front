import { Table } from "@/components/common/table";
import { columns, orders } from "@/components/page-modules/user/pages/order-history/data/order-history.repository";
import { DashboardLink } from "@/components/page-modules/user/shared/components/link";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

export function OrderHistoryContainer() {
    return (
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Order HIstory</h1>
            </div>
            <Table columns={columns}>
                {
                    orders.map((d) => (
                        <tr key={d.key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4">
                                <p className="text-sm font-medium leading-5 text-[#191c1f]">{d.orderId}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm font-semibold leading-5 text-[#FA8232]">{d.statusText}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm font-normal leading-5 text-[#5F6C72]">{d.date}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm font-normal leading-5 text-[#475156]">{d.total}</p>
                            </td>
                            <td className="px-6 py-4">
                                <DashboardLink href="/order-details" type="link" color="text-[#2DA5F3]" text="View Details" />
                            </td>
                        </tr>
                    ))
                }
            </Table>
            <div className="w-full flex flex-row items-center justify-center gap-5 py-4 border-t border-solid border-[#E4E7E9]">
                <button type="button" className="w-10 h-10 flex justify-center items-center rounded-[50%] text-[#FA8232] border-2 border-solid border-[#FA8232]">
                    <PiArrowLeft size="24px" />
                </button>
                <div className="flex flex-row gap-2">
                    <div className="w-10 h-10 flex justify-center cursor-pointer items-center rounded-[50%] border border-solid border-[#E4E7E9]">
                        <span className="text-sm font-normal leading-5 text-[#191c1f]">01</span>
                    </div>
                    <div className="w-10 h-10 flex justify-center cursor-pointer items-center rounded-[50%] border border-solid border-[#E4E7E9]">
                        <span className="text-sm font-normal leading-5 text-[#191c1f]">02</span>
                    </div>
                </div>
                <button type="button" className="w-10 h-10 flex justify-center items-center rounded-[50%] text-[#FA8232] border-2 border-solid border-[#FA8232]">
                    <PiArrowRight size="24px" />
                </button>
            </div>
        </div>
    )
}