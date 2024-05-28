import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";

export function CardsAdd() {
    return (
        <div className="w-full flex min-h-[300px] flex-col gap-6 rounded">
            <div className="w-full py-4 px-6 border-b border-solid border-[#E4E7E9]">
                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">Add New Card</h1>
            </div>
            <div className="w-full px-6 pb-6">
                <form action="" className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <Input type="text" id="cardname" name="cardname" label="Name on Card" />
                        </div>
                        <div className="w-full">
                            <Input type="text" id="cardnumber" name="cardnumber" label="Card Number" />
                        </div>
                        <div className="flex w-full gap-4">
                            <div className="w-1/2">
                                <Input type="text" id="expire-date" name="expire-date" placeholder="DD/YY" label="Expire Date" />
                            </div>
                            <div className="w-1/2">
                                <Input type="text" id="cvc" name="cvc" label="CVC" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button width="w-fit" bgColor="bg-[#FA8232]" type="submit">
                            <span className="text-white text-base font-bold leading-[56px] uppercase">Add Card</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}