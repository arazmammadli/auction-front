import { Button } from "@/components/common/button";
import { PiArrowRightBold } from "react-icons/pi";

export function VerifyEmailContainer() {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full text-center">
                <h1 className="text-xl font-semibold leading-5 text-[#191c1f] mb-3">Verify Your Email Address</h1>
                <p className="text-sm font-normal leading-5 text-[#5f6c72]">Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu, tristique a eu in diam.</p>
            </div>
            <div className="w-full">
                <form action="" className="flex flex-col gap-6">
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="verification-code" className="block text-sm font-normal leading-5 text-[#191c1f]">
                                Verification Code
                            </label>
                            <button type="button" className="text-sm text-[#2da5f3] leading-5 font-medium">
                                <span>Resend Code</span>
                            </button>
                        </div>
                        <input type="text" name="code" id="verification-code" className="rounded-sm w-full h-11 py-3 px-4 focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] border border-solid border-[#E4E7E9] bg-white outline-none" />
                    </div>
                    <div className="w-full">
                        <Button width="w-full" type="submit">
                            <span className="text-sm text-white font-bold leading-[48px] uppercase">Verify me</span>
                            <PiArrowRightBold color="#fff" size="22px" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}