import { Container } from "@/components/common/container";
import { useCallback, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useAuctionSearch } from "../../header/hooks/header-search.hook";
import debounce from "lodash.debounce";
import { usePathname } from "next/navigation";
import { useGetPublicLang } from "@/global/requests/get-public-lang";
import Loading from "@/components/common/loading";
import Image from "next/image";
import Link from "next/link";
import { AuctionStatus } from "@/components/page-modules/auction/data/auction.type";

type Props = {
    close: () => void;
};

export function MobileSearchContainer(props: Props) {

    const { close } = props;
    // hooks
    const [search, searchSet] = useState<string>("");

    // next navigation hooks
    const pathname = usePathname();

    // query hooks
    const {
        data,
        isFetching,
        refetch,
    } = useAuctionSearch(search as string);
    const { data: langData } = useGetPublicLang();

    const request = debounce(async () => {
        refetch();
    }, 300);

    const debounceRequest = useCallback(() => {
        request();
    }, []);

    useEffect(() => {
        searchSet("");
    }, [pathname]);


    return (
        <div className="w-full h-full fixed z-50 top-0 left-0 bg-white">
            <div className="pt-[3.75rem]">
                <Container>
                    <div className="pt-[30px]">
                        <div className="flex flex-row justify-between items-center mb-3">
                            <span className="text-sm leading-5 font-normal text-[#191c1f]">{langData?.mobile_search_head}</span>
                            <div className="cursor-pointer" onClick={close}>
                                <IoClose size="24px" color="#000" />
                            </div>
                        </div>
                        <form action="" className="relative mb-3">
                            <input
                                type="text"
                                className="w-full py-2 pl-0 text-sm border-t-0 focus:ring-0 focus:ring-offset-0 focus:border-[#ddd] border-x-0 border-b-2 border-solid border-[#ddd]"
                                placeholder={langData?.header.input_placeholder}
                                name="search"
                                id="search"
                                value={search}
                                onChange={(e) => {
                                    searchSet(e.target.value);
                                    debounceRequest();
                                }}
                            />
                            <button type="button" className="absolute top-0 py-2 px-[15px] right-0 h-full bg-transparent">
                                {
                                    isFetching ? <Loading /> : <FiSearch size="22px" color="#000" />
                                }
                            </button>
                        </form>
                        <div className="w-full text-sm leading-5 font-normal text-[#191c1f]">
                            {(search.length === 0 && data.list.length === 0) && <span className="opacity-40">{langData?.mobile_search_overview}</span>}
                            {(data.list.length === 0 && search.length > 0) && <span className="opacity-40 text-base font-normal text-[#191c1f]">No results found.</span>}
                            {
                                data.list.length > 0 && <ul role="list" className="divide-y divide-gray-100">
                                    {
                                        data?.list.map((auction) => (
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
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
};