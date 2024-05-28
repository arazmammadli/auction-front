import Image from "next/image";
import { Table } from "@/components/common/table";
import { Button } from "@/components/common/button";
import { PiShoppingCartSimple, PiXCircle } from "react-icons/pi";
import { columns, wishlistData } from "@/components/page-modules/wishlist/data/wishlist.data";


export function WishlistContainer() {
    return (
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Wishlist</h1>
            </div>
            <Table columns={columns}>
                {
                    wishlistData.map((w) => (
                        <tr key={w.key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                <div className="flex flex-row gap-4 items-center">
                                    <Image src={`/assets/images/${w.img}`} width="72" height="72" alt="PS 5" />
                                    <div className="max-w-[45rem]">
                                        <p className="text-sm font-normal leading-5 text-[#475156]">{w.shortInfo}</p>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1">
                                    <p className="text-sm leading-5 font-normal text-[#929FA5]">
                                        <del>{w.exprice}</del>
                                    </p>
                                    <p className="text-sm font-medium leading-5 text-[#191c1f]">${w.price}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className={`text-sm font-semibold leading-5 ${w.onStock ? "text-[#2DB224]" : "text-[#EE5858]"}`}>{w.onStock ? "IN STOCK" : "OUT OF STOCK"}</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-max flex gap-6 items-center">
                                    <Button width="w-full" type="button">
                                        <span className="text-sm font-bold text-white leading-[48px] uppercase">add to card</span>
                                        <PiShoppingCartSimple size="20px" color="#fff" />
                                    </Button>
                                    <div className="cursor-pointer">
                                        <PiXCircle size="24px" color="#929FA5" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    )
}