import {Button} from "@/components/common/button";
import {Input} from "@/components/common/input";

export function CouponeCode() {
    return (
        <div className="w-full pb-5 rounded border border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6 border-b border-solid border-[#E4E7E9] mb-5">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Coupon Code</h1>
            </div>
            <div className="w-full px-6">
                <div className="mb-4">
                    <Input type="email" name="email" id="email" placeholder="Email address"/>
                </div>
                <div className="">
                    <Button bgColor="bg-[#2DA5F3]" type="button" width="w-fit">
                        <span className="text-sm font-bold leading-[48px] text-white uppercase">Apply Coupon</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}