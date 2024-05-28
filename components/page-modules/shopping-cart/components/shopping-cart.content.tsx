import { Table } from "@/components/common/table";
import Image from "next/image";
import { OutlinedButton } from "@/components/common/outlined.button";
import { PiXCircle, PiMinus, PiPlus, PiArrowLeft } from "react-icons/pi";
import { columns, wishlistData } from "@/components/page-modules/shopping-cart/data/shopping.repository";

export function ShoppingCartContent() {
    return (
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Shopping Card</h1>
            </div>
            <Table columns={columns}>
                {
                    wishlistData.map((w) => (
                        <tr key={w.key} className="bg-white last:border-b-0 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4">
                                <div className="flex flex-row gap-3 flex-grow-[2] items-center">
                                    <div className="cursor-pointer">
                                        <PiXCircle size="24px" color="#EE5858" />
                                    </div>
                                    <Image src={`/assets/images/${w.img}`} width="72" height="72" alt="Smart Tv" />
                                    <div className="max-w-[16.25rem]">
                                        <p className="text-sm font-normal leading-5 text-[#191c1f]">{w.shortInfo}</p>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1">
                                    {
                                        w.exprice ? <p className="text-sm leading-5 font-normal text-[#929FA5]">
                                            <del>$99</del>
                                        </p> : null
                                    }
                                    <p className="text-sm font-medium leading-5 text-[#191c1f]">$70</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="py-3 px-5 rounded flex items-center gap-5 justify-between border border-solid border-[#E4E7E9]">
                                    <button type="button">
                                        <PiMinus size="16px" color="#191C1F" />
                                    </button>
                                    <span className="text-base font-normal leading-6 text-[#475156]">03</span>
                                    <button type="button">
                                        <PiPlus size="16px" color="#191C1F" />
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm font-medium leading-5 text-[#191c1f]">$250</p>
                            </td>
                        </tr>
                    ))
                }
            </Table>
            <div className="w-full flex flex-row items-center justify-between p-3 lg:p-6 border-t border-solid border-[#E4E7E9]">
                <OutlinedButton type="button" borderClr="border-[#2DA5F3]">
                    <PiArrowLeft size="20px" color="#2DA5F3" />
                    <span className="text-sm font-bold leading-[48px] text-[#2DA5F3] uppercase">Return to Shop</span>
                </OutlinedButton>
                <OutlinedButton type="button" borderClr="border-[#2DA5F3]">
                    <span className="text-sm font-bold leading-[48px] text-[#2DA5F3] uppercase">Update cart</span>
                </OutlinedButton>
            </div>
        </div>
    )
}