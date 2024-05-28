
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";
import { TiArrowSortedUp } from "react-icons/ti";

type Props = {
    lang: LangType;
};

export async function ComingSoon(props: Props) {
    const { lang } = props;

    const data = await getDictionary(lang);
    const head = data["coming_soon_head"].split(" ");

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

                <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>


                <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>


                <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>

                <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
                <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
            </div>

            <div className="relative">
                <h2 className="text-white text-4xl md:text-8xl font-bold flex flex-row items-center">
                    {head[0]}
                    <div className="relative text-sm mx-2">
                        <TiArrowSortedUp size="26px" className="text-[#1B6392]" />
                        <div className="absolute -top-12 transform -rotate-45 text-[#1B6392]"><p className="font-light text-base text-white bg-[#1B6392] rounded-md px-2 py-0">super</p></div>
                    </div>
                    {head[1] ? head[1] : ""}
                </h2>
            </div>
        </div>
    )
};