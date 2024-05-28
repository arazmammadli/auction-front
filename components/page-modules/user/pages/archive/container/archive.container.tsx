"use client"
import { Table } from "@/components/common/table";
import { useGetPublicLang } from "@/global/requests/get-public-lang";
import { useGetUserArchive } from "../hooks/get-archive.hook";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";
import { AuctionStatus, IAuction, IAuctionResponse } from "@/components/page-modules/auction/data/auction.type";
import Image from "next/image";
import Loading from "@/components/common/loading";

type ArgType = {
    prevOffset: number;
} & IAuctionResponse;

export function UserArchiveContainer() {

    // csr data fetching
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetUserArchive();

    // intersection observer
    const { ref, inView, entry } = useInView();

    // get multi lang data hook
    const { data: langData } = useGetPublicLang();

    const archives = useMemo(() => {
        return data?.pages.reduce((acc: IAuction[], page: ArgType): IAuction[] => {
            return [...acc, ...page.list];
        }, [])
    }, [data]);

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage !== false) {
            fetchNextPage();
        }
    }, [entry, fetchNextPage])

    if (typeof langData === "undefined") return <h1>Page no content</h1>;

    return (
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">{langData.dashboard.archive.head}</h1>
            </div>
            <div className="w-full max-h-[28.75rem] overflow-y-auto">
                <Table columns={langData.dashboard.archive.columns}>
                    {
                        (archives && archives.length > 0) && archives.map((archive) => (
                            <tr key={archive.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">
                                    <div className="flex items-center uppercase">
                                        {archive.auctionStatus.id == AuctionStatus.LIVE ? <><div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {langData.auction.auction_live_txt}</> : null}
                                        {archive.auctionStatus.id == AuctionStatus.SOON ? <><div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div> {langData.auction.auction_soon_txt}</> : null}
                                        {archive.auctionStatus.id == AuctionStatus.ENDED ? <><div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div> {langData.auction.auction_sold_txt}</> : null}
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                    <Image className="w-12 h-12 rounded-full" width="48" height="48" src={archive.product.mainImage.url} alt={archive.product.slug} />
                                </th>
                                <td className="px-6 py-4">
                                    <p className="lg:text-base text-sm font-semibold leading-5 text-[#191c1f]">{archive.product.name}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium leading-5 text-[#191c1f]">{archive.product.buying} ₼</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium leading-5 text-[#191c1f]">{archive.product.selling} ₼</p>
                                </td>
                            </tr>
                        ))
                    }
                    {(archives && archives.length > 0) && <tr ref={ref} className="bg-white relativ w-full"></tr>}
                </Table>
                <div className="w-full flex justify-center">
                    {isLoading && <Loading />}
                </div>
            </div>
        </div>
    )
}