import { OutlinedButton } from "@/components/common/outlined.button";

type Props = {
    head: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    isButton?: boolean;
}

export function DashboardAddress({ head, address, email, name, phone, isButton = true }: Props) {
    return (
        <div className="w-full rounded border border-solid border-[#E4E7E9]">
            <div className="bg-white py-4 pl-6 rounded-t border-b border-solid border-[#E4E7E9]">
                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">{head}</h1>
            </div>
            <div className="flex flex-col gap-[22px] py-6 px-6">
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full">
                        <h1 className="text-sm font-medium leading-5 text-[#191c1f]">{name}</h1>
                    </div>
                    <p className="text-sm font-normal leading-5 text-[#5F6C72]">{address}</p>
                    <div className="flex flex-row gap-1 items-center">
                        <h3 className="text-sm font-normal leading-5 text-[#191c1f]">Phone Number:</h3>
                        <p className="text-sm font-normal leading-5 text-[#5F6C72]">{phone}</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <h3 className="text-sm font-normal leading-5 text-[#191c1f]">Email:</h3>
                        <p className="text-sm font-normal leading-5 text-[#5F6C72]">{email}</p>
                    </div>
                </div>
                {
                    isButton ? <div className="w-fit">
                        <OutlinedButton type="link" href="/setting" borderClr="border-[#D5EDFD]">
                            <span className="text-sm font-bold leading-[48px] text-[#2DA5F3] uppercase">Edit Address</span>
                        </OutlinedButton>
                    </div> : null
                }
            </div>
        </div>
    )
}