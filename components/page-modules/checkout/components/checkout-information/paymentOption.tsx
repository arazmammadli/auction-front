import { Input } from "@/components/common/input";
import Image from "next/image";
import { PiCurrencyDollar, PiCreditCard } from "react-icons/pi";
import { BiLogoVenmo } from "react-icons/bi";

export function PaymentOption() {
    return (
        <div className="w-full pt-5 pb-8 rounded border border-solid border-[#E4E7E9] mb-10">
            <div className="w-full px-6 mb-5">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Payment Option</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-1 border-y border-solid border-[#E4E7E9] p-6 mb-5">
                <div className="col-span-1 flex flex-col p-2 rounded-sm md:rounded-none lg:p-0 gap-4 border lg:border-l-0 lg:border-y-0 lg:border-r border-solid border-[#E4E7E9]">
                    <div className="flex flex-col items-center gap-2">
                        <PiCurrencyDollar size="32px" color="#FA8232" />
                        <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Cash on Delivery</h1>
                    </div>
                    <div className="flex justify-center">
                        <input type="radio" className="w-5 h-5 focus:ring-0 focus:ring-offset-0 text-[#FA8232] border-[#C9CFD2]" name="checkPayment" id="checkPayment" />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col p-2 rounded-sm md:rounded-none lg:p-0 gap-4 border lg:border-l-0 lg:border-y-0 lg:border-r border-solid border-[#E4E7E9]">
                    <div className="flex flex-col items-center gap-2">
                        <BiLogoVenmo size="32px" color="#3D95CE" />
                        <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Venmo</h1>
                    </div>
                    <div className="flex justify-center">
                        <input type="radio" className="w-5 h-5 focus:ring-0 focus:ring-offset-0 text-[#FA8232] border-[#C9CFD2]" name="checkPayment" id="checkPayment" />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col p-2 rounded-sm md:rounded-none lg:p-0 gap-4 border lg:border-l-0 lg:border-y-0 lg:border-r border-solid border-[#E4E7E9]">
                    <div className="flex flex-col items-center gap-2">
                        <Image src="/assets/images/paypal.png" width="32" height="32" alt="PayPal" />
                        <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Paypal</h1>
                    </div>
                    <div className="flex justify-center">
                        <input type="radio" className="w-5 h-5 focus:ring-0 focus:ring-offset-0 text-[#FA8232] border-[#C9CFD2]" name="checkPayment" id="checkPayment" />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col p-2 rounded-sm md:rounded-none lg:p-0 gap-4 border lg:border-l-0 lg:border-y-0 lg:border-r border-solid border-[#E4E7E9]">
                    <div className="flex flex-col items-center gap-2">
                        <Image src="/assets/images/amazon-pay.png" width="32" height="32" alt="Amazon Pay" />
                        <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Amazon Pay</h1>
                    </div>
                    <div className="flex justify-center">
                        <input type="radio" className="w-5 h-5 focus:ring-0 focus:ring-offset-0 text-[#FA8232] border-[#C9CFD2]" name="checkPayment" id="checkPayment" />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col p-2 rounded-sm md:rounded-none lg:p-0 gap-4 border lg:border-none border-solid border-[#E4E7E9]">
                    <div className="flex flex-col items-center gap-2">
                        <PiCreditCard size="32px" color="#FA8232" />
                        <h1 className="text-sm font-medium leading-5 text-[#191c1f]">Debid/Credit Card</h1>
                    </div>
                    <div className="flex justify-center">
                        <input type="radio" className="w-5 h-5 focus:ring-0 focus:ring-offset-0 text-[#FA8232] border-[#C9CFD2]" name="checkPayment" id="checkPayment" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 px-6">
                <div className="w-full">
                    <Input type="text" id="cardname" name="cardname" label="Name on Card" />
                </div>
                <div className="w-full">
                    <Input type="text" id="card-number" name="card-number" label="Card Number" />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <Input type="text" name="expire-date" id="expire-date" placeholder="DD/YY" label="Expire Date" />
                    </div>
                    <div className="flex-grow">
                        <Input type="text" id="cvc" name="cvc" label="CVC" />
                    </div>
                </div>
            </div>
        </div>
    )
}