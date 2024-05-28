import { AuctionStatus, IAuction } from "@/components/page-modules/auction/data/auction.type";
import Image from "next/image";
import Link from "next/link";

type Props = {
    data: IAuction[];
};

export function SearchResults(props: Props) {
    const { data } = props;

    return (
        <>
            {data?.length === 0 && <div className="w-full p-2">
                <span className="text-base font-normal text-[#191c1f]">No results found.</span>
            </div>}
            <ul role="list" className="divide-y divide-gray-100">
                {
                    data?.map((auction) => (
                        <li key={auction.id} className="flex justify-between gap-x-6 p-2">
                            <div className="flex min-w-0 gap-x-4">
                                <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" width="48" height="48" src={auction.product.mainImage.url} alt={auction.slug} />
                                <div className="min-w-0 flex-auto">
                                    <Link href={`/auction/${auction.slug}`} className="block">
                                        <p className="text-sm font-semibold hover:text-[#FA8232] transition-colors duration-300 leading-6 text-gray-900">{auction.product.name}</p>
                                    </Link>
                                    {
                                        auction.auctionStatus.id == AuctionStatus.SOON ?
                                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">SOON</span> :
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-0 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">LIVE</span>

                                    }
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{auction.product.selling} AZN</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    <del>
                                        {auction.product.buying} AZN
                                    </del>
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};