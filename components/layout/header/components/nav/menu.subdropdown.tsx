import { MenuDropdownSubItem } from "@/components/layout/header/components/nav/dropdown.subitem";

type Props = {
    subdata: {
        key: string;
        label: string;
    }[]
}

export function MenuSubDropdown(props: Props) {
    const { subdata } = props;
    return (
        <div className="w-full h-max absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 right-[calc(-100%-12px)] top-0 p-5 rounded shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] bg-white borer border-solid border-[#E4E7E9]">
            <ul className="w-full">
                {
                    subdata.map(({ key: id, ...d }) => (
                        <MenuDropdownSubItem key={id} {...d} />
                    ))
                }
            </ul>
        </div>
    )
}