"use client";
import { ProductTracking } from "@/components/page-modules/to-detail/components/tracking";
import { TrackingOrderActivity } from "@/components/page-modules/to-detail/components/tracking-order.activity";
import { DashboardAddress } from "@/components/page-modules/user/shared/components/address";
import {OrderDetailLeaveRating } from "@/components/page-modules/user/pages/order-detail/components/order-detail.modal";
import { Table } from "@/components/common/table";
import { useState } from "react";
import { billingAddress, shippingAddress, productColumns } from "@/components/page-modules/user/pages/order-detail/data/order-detail.repository";
import { PiArrowLeft } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import Image from "next/image";

export function OrderDetailContainer() {
    const [onShow, setOnShow] = useState(false);
    return (
        <>
            <div className="bg-white rounded border border-solid border-[#E4E7E9]">
                <div className="flex flex-row justify-between items-center px-3 md:px-6 py-4 border-b border-solid border-[#E4E7E9]">
                    <div className="flex items-center gap-3">
                        <button type="button" className="text-[#191C1F]">
                            <PiArrowLeft size="24px" />
                        </button>
                        <h1 className="text-sm font-medium leading-5 text-[#191C1F] uppercase">Order Details</h1>
                    </div>
                    <button type="button" className="flex items-center gap-2 text-[#FA8232]">
                        <span className="text-sm font-semibold leading-5">Leave a Rating </span>
                        <HiOutlinePlus size="20px" />
                    </button>
                </div>
                <div className="w-full">
                    <ProductTracking />
                    <TrackingOrderActivity />
                </div>
                <div className="border-t border-solid border-[#E4E7E9]">
                    <div className="w-full h-max overflow-x-auto rounded ">
                        <div className="w-full py-5 px-6">
                            <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Product (02)</h1>
                        </div>
                        <Table columns={productColumns}>
                            <tr className="bg-white last:border-b-0 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    <div className="flex flex-row gap-4 items-center">
                                        <Image src="/assets/images/phone.png" width="80" height="80" alt="Phone" />
                                        <div className="max-w-[19rem] flex flex-col gap-1">
                                            <h1 className="text-xs font-semibold leading-4 text-[#2DA5F3]">SMARTPHONE</h1>
                                            <p className="text-sm font-normal leading-5 text-[#191C1F]">Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone with Advanced Pixel C...</p>
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-normal leading-5 text-[#475156]">$899</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-normal leading-5 text-[#475156]">x1</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium leading-5 text-[#191c1f]">$899</p>
                                </td>
                            </tr>
                            <tr className="bg-white last:border-b-0 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    <div className="flex flex-row gap-4 items-center">
                                        <Image src="/assets/images/phone.png" width="80" height="80" alt="Phone" />
                                        <div className="max-w-[19rem] flex flex-col gap-1">
                                            <h1 className="text-xs font-semibold leading-4 text-[#2DA5F3]">SMARTPHONE</h1>
                                            <p className="text-sm font-normal leading-5 text-[#191C1F]">Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone with Advanced Pixel C...</p>
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-normal leading-5 text-[#475156]">$899</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-normal leading-5 text-[#475156]">x1</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium leading-5 text-[#191c1f]">$899</p>
                                </td>
                            </tr>
                        </Table>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-0 py-4 px-3 md:py-8 md:px-6 border-t border-solid border-[#E4E7E9]">
                    <div className="col-span-1">
                        <DashboardAddress isButton={false} {...billingAddress} />
                    </div>
                    <div className="col-span-1">
                        <DashboardAddress isButton={false} {...shippingAddress} />
                    </div>
                    <div className="col-span-1">
                        <div className="w-full rounded border border-solid border-[#E4E7E9]">
                            <div className="bg-white py-4 pl-6 rounded-t border-b border-solid border-[#E4E7E9]">
                                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">Order Notes</h1>
                            </div>
                            <div className="py-6 px-6">
                                <p className="text-sm font-normal leading-5 text-[#5F6C72]">Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {onShow && <OrderDetailLeaveRating onShow={onShow} setOnShow={setOnShow} />}
        </>
    )
}