import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Select } from "@/components/common/select";

type Props = {
    head: string;
}

export function AddressContainer({head}: Props) {
    return (
        <div className="rounded border border-solid border-[#E4E7E9]">
            <div className="py-4 px-3 md:px-6 border-b border-solid border-[#E4E7E9]">
                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">{head}</h1>
            </div>
            <div className="w-full p-3 md:p-6">
                <form action="" className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <Input label="First Name" type="text" placeholder="Kevin" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Input label="Last Name" type="text" placeholder="Gilbert" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full">
                                <Input label="Company Name (Optional)" type="text" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full">
                                <Input label="Address" placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D" type="text" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full">
                                <Select label="Country" name="country" options={[]} />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full">
                                <Select label="Region/State" name="region" options={[]} />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <Select label="City" name="city" options={[]} />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Input label="Zip Code" placeholder="1207" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full">
                                <Input label="Email" placeholder="kevin12345@gmail.com" type="email" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full">
                                <Input label="Phone Number" placeholder="+1-202-555-0118" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button type="submit" width="w-fit">
                            <span className="text-sm font-bold leading-[48px] text-white uppercase">Save Changes</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}