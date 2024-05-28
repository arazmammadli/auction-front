"use client";
import { Filters } from "@/components/page-modules/shop/components/filters/index";
import { Search } from "@/components/page-modules/shop/components/right/search";
import { ActiveFilter } from "@/components/page-modules/shop/components/right/activeFilter";
import { products } from "@/components/page-modules/home/data/home.repository";
import { ProductContainer } from "@/components/container/product.container";
import { FilterDrawer } from "@/components/page-modules/shop/components/filters/filter.drawer";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

export function ShopContainer() {
    const [open, setOpen] = useState(false);

    const closeDrawer = () => {
        setOpen(false);
    }
    return (
        <>
            <div className="flex flex-row gap-6">
                <div className="flex-[0_0_19.5rem] max-w-[19.5rem] hidden lg:block">
                    <Filters />
                </div>
                <div className="flex-[0_0_100%] max-w-full lg:flex-[0_0_61.5rem] lg:max-w-[61.5rem]">
                    <div className="w-full mb-4 lg:hidden block" onClick={() => setOpen(true)}>
                        <button type="button" className="flex items-center gap-2">
                            <IoFilter size="24px" color="#191c1f" />
                            <span className="text-sm font-normal text-[#191c1f]">Filter</span>
                        </button>
                    </div>
                    <Search />
                    <ActiveFilter />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 grid-cols-1">
                        <ProductContainer type="all" products={products} />
                    </div>
                </div>
            </div>
            <FilterDrawer onClose={closeDrawer} open={open} />
        </>
    )
}