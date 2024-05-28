import { FiSearch } from "react-icons/fi"

export function Search() {
    return (
        <div className="w-full flex flex-row justify-between mb-4">
            <div className="relative hidden md:block min-w-[26.5rem]">
                <input type="text" placeholder="Search for anything..." name="catSearch" id="catSearch" className="py-3 w-full px-4 text-[#77878F] placeholder:text-[#77878F] border border-solid border-[#E4E7E9] focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9]" />
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                    <FiSearch size="20px" />
                </div>
            </div>
            <div className="flex gap-[22px] items-center">
                <p className="text-sm font-normal leading-5 text-[#191c1f]">Sort by:</p>
                <div className="min-w-[11.25rem]">
                    <select id="sortby" name="sortby" className="w-full py-3 px-4 rounded-sm focus:ring-0 focus:ring-offset-0 border border-solid border-[#E4E7E9] focus:border-[#E4E7E9]">
                        <option>Most Popular</option>
                        <option>Most Popular</option>
                        <option>Most Popular</option>
                    </select>
                </div>
            </div>
        </div>
    )
}