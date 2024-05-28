import { DropdownContent } from "@/components/layout/header/components/nav/dropdown.content";
import { Dropdown } from "antd";
import { IoIosArrowDown } from "react-icons/io";

export function MenuDropdown() {
    return (
        <Dropdown
            overlayClassName="bg-white min-w-[15rem_!important] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] rounded border border-solid border-[#E4E7E9]"
            trigger={["click"]}
            dropdownRender={DropdownContent}
        >
            <div className="bg-[#f2f4f5] cursor-pointer rounded-sm py-[14px] px-6">
                <button type='button' className='flex flex-row items-center gap-2'>
                    <span className='text-sm font-medium leading-5 text-[#191c1f]'>All Category</span>
                    <IoIosArrowDown size="16px" color="#191C1F" />
                </button>
            </div>
        </Dropdown>
    )
}