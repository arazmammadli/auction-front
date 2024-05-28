import { PiCheckCircle, PiStack,PiArrowRight } from "react-icons/pi";
import { OutlinedButton } from "@/components/common/outlined.button";
import { CustomLink } from "@/components/common/link";

export function CheckoutSuccessContent() {
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="w-full">
                <div className="mb-6 flex justify-center">
                    <PiCheckCircle size="88px" color="#2DB324" />
                </div>
                <div className="max-w-[26.5rem] mx-auto text-center">
                    <h1 className="text-2xl font-semibold leading-8 text-[#191c1f] mb-3">Your order is successfully place</h1>
                    <p className="text-sm font-normal leading-5 text-[#5F6C72]">Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-3">
                <OutlinedButton type="link" href="/dashboard" borderClr="border-[#FFE7D6]">
                    <PiStack size="20px" color="#FA8232" />
                    <span className="text-sm font-bold leading-[48px] text-[#FA8232] uppercase">Go to Dashboard</span>
                </OutlinedButton>
                <CustomLink width="w-fit" href="/orders">
                    <span className="text-sm font-bold leading-[48px] text-white uppercase">View Order</span>
                    <PiArrowRight size="20px" color="#fff"/>
                </CustomLink>
            </div>
        </div>
    )
}