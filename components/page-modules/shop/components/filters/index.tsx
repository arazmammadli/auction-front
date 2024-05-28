import { FilterContent } from "@/components/page-modules/shop/components/filters/filter.content"
import { filterData } from "@/components/page-modules/shop/data/shop.repository";
import { FilterLine } from "@/components/page-modules/shop/components/filters/filter.line";

export function Filters() {
    return (
        <div className="w-full flex flex-col gap-4">
            <FilterContent head="Category">
                <div className="flex flex-col gap-3">
                    {
                        filterData.category.map((d) => (
                            <div key={d.id} className="flex flex-row gap-2 items-center">
                                <input type="radio" className="w-5 h-5 border border-solid border-[#C9CFD2] focus:ring-0 focus:ring-offset-0 checked:text-[#FA8232]" name={d.name} id={d.name.toLocaleLowerCase().replace(/ /g, "-")} />
                                <label htmlFor={d.name.toLowerCase().replace(/ /g, "-")} className="text-sm cursor-pointer font-medium text-[#475156]">{d.name}</label>
                            </div>
                        ))
                    }
                </div>
            </FilterContent>
            <FilterLine />
            <FilterContent head="Price Range">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                        <input type="text" name="minprice" id="minprice" placeholder="Min price" className="max-w-[150px] py-2 pl-3 rounded border border-solid border-[#E4E7E9] focus:border-[#E4E7E9] focus:ring-0 focus:ring-offset-0" />
                        <input type="text" name="maxprice" id="maxprice" placeholder="Max price" className="max-w-[150px] py-2 pl-3 rounded border border-solid border-[#E4E7E9] focus:border-[#E4E7E9] focus:ring-0 focus:ring-offset-0" />
                    </div>
                    <div className="flex flex-col gap-3">
                        {
                            filterData.price.map((d) => (
                                <div key={d.id} className="flex flex-row gap-2 items-center">
                                    <input type="radio" className="w-5 h-5 rouded-sm border border-solid border-[#C9CFD2] focus:ring-0 focus:ring-offset-0 checked:text-[#FA8232]" name={`price-${d.id}`} id={`price-${d.id}`} />
                                    <p className="text-sm font-normal text-[#475156]">{d.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </FilterContent>
            <FilterLine />
            <FilterContent head="popular Brands">
                <div className="grid grid-cols-2 gap-y-3">
                    {
                        filterData.popularBrands.map((d) => (
                            <div key={d.id} className="flex flex-row gap-2 items-center group">
                                <input type="checkbox" className="w-5 h-5 rounded border border-solid border-[#C9CFD2] transition-colors duration-300 group-hover:border-2 group-hover:border-[#FA8232] focus:ring-0 focus:ring-offset-0 checked:text-[#FA8232]" name={d.name} id={d.name} />
                                <p className="text-sm font-medium text-[#475156]">{d.name}</p>
                            </div>
                        ))
                    }
                </div>
            </FilterContent>
            <FilterLine />
            <FilterContent head="Popular Tag">
                <div className="flex flex-row flex-wrap gap-[6px]">
                    {
                        filterData.tags.map((d) => (
                            <div key={d.id} className="py-[6px] cursor-pointer group hover:border-[#FA8232] hover:bg-[#FFF3EB] transition-colors duration-300 px-3 bg-white rounded-sm border border-solid border-[#E4E7E9]">
                                <span className="text-sm font-medium text-[#191c1f] group-hover:text-[#FA8232] leading-5">{d.name}</span>
                            </div>
                        ))
                    }
                </div>
            </FilterContent>
        </div>
    )
}