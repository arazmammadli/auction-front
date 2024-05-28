"use client";
import { useInView } from "react-intersection-observer";
import { AuctionCard } from "../../auction/components/auction-card";
import { useGetAuctionArchive } from "../hooks/get-archive.hook";
import { useEffect } from "react";
import { IAuction, IAuctionResponse } from "../../auction/data/auction.type";
import { useGetPublicLang } from "@/global/requests/get-public-lang";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/components/common/loading"));

type ArgType = {
    prevOffset: number;
} & IAuctionResponse;

export function AuctionArchiveContainer() {

    // query hooks
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetAuctionArchive();
    const { data: langData } = useGetPublicLang();

    // intersection observer
    const { ref, inView } = useInView();

    const loadMore = async () => {
        fetchNextPage();
    };

    useEffect(() => {
        if (inView && hasNextPage !== false) {
            loadMore();
        }
    }, [inView, fetchNextPage]);

    const auctions = data?.pages.reduce((acc: IAuction[], page: ArgType): IAuction[] => {
        return [...acc, ...page.list];
    }, []);

    return (
        <div className="w-full">
            <div className="w-full text-left py-1 mb-5">
                <h1 className="text-[32px] font-semibold leading-10 text-[#191c1f]">{langData?.auction_archive_head}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    auctions?.map((item, index) => {

                        if (index === auctions?.length - 1) {
                            return (
                                <div className="w-full" key={item.id} ref={ref}>
                                    <AuctionCard key={item.id} {...item} />
                                </div>
                            )
                        } else {
                            return (
                                <AuctionCard key={item.id} {...item} />
                            )
                        }
                    })
                }
            </div >
            <div className="flex justify-center items-center py-1">
                {
                    isFetchingNextPage && <Loading />
                }
            </div>
        </div>
    )
};