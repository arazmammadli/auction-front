import { MenuDropdownItem } from "@/components/layout/header/components/nav/dropdown.item";
// import { categoryData } from "@/components/layout/header/data/header.repository";

export function DropdownContent() {
    return (
        <div className="w-full py-3">
            <ul className="bg-white">
                {/* {
                    categoryData.map((d) => (
                        <MenuDropdownItem key={d.id} {...d} />
                    ))
                } */}
            </ul>
        </div>
    )
}