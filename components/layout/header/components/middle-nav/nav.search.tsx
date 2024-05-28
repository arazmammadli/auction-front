import { SearchResults } from "./nav.search-results";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";
import { IAuction } from "@/components/page-modules/auction/data/auction.type";
import { FiSearch } from "react-icons/fi";
import Loading from "@/components/common/loading";
import { useAuctionSearch } from "../../hooks/header-search.hook";
import { usePathname } from "next/navigation";

type Props = {
    text: string;
};

export function Search(props: Props) {
    const { text } = props;

    // hooks
    const [searchTxt, searchTxtSet] = useState<string>("");

    // Route hooks
    const pathname = usePathname();

    // query hooks
    const {
        isFetching,
        data: queryResults,
        refetch,
    } = useAuctionSearch(searchTxt);

    const request = debounce(async () => {
        refetch();
    }, 300);

    const debounceRequest = useCallback(() => {
        request();
    }, []);

    useEffect(() => {
        searchTxtSet("");
    }, [pathname]);

    return (
        <div className="relative md:flex-[0_0_18.75rem] lg:flex-[0_0_37.5rem]">
            <input 
            type="text" 
            name="search"
            value={searchTxt}
             onChange={(e) => {
                searchTxtSet(e.target.value);
                debounceRequest();
            }} placeholder={text} id="search" className={classNames("w-full bg-[#f1f1f3] placeholder:text-[#77878F] text-[#77878F] rounded-sm focus:ring-0 focus:ring-offset-0 border-none focus:border-none shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] px-5 py-[14px] outline-none", {
                ["rounded-b-none"]: searchTxt
            })} />
            <div className="absolute top-1/2 right-5 -translate-y-1/2 ">
                {
                    isFetching ? <Loading /> : <FiSearch size="22px" />
                }
            </div>
            {
                searchTxt.length > 0 && <div className="absolute w-full z-20 top-full left-0 bg-white border-t-0 border border-solid border-[#d9dde3] rounded-b">
                    <SearchResults data={queryResults?.list as IAuction[]} />
                </div>
            }
        </div>
    )
};