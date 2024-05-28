import { Input } from "@/components/common/input";
import { Select } from "@/components/common/select";

export function BillingInformation() {
    return (
        <div className="w-full mb-10">
            <div className="mb-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Billing Information</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-2">
                    <label htmlFor="firstname" className="block text-sm font-normal leading-5 text-[#191c1f]">User name</label>
                    <div className="flex gap-4 mt-2">
                        <Input type="text" id="firstname" name="firstname" placeholder="First name" />
                        <Input type="text" id="lastname" name="lastname" placeholder="Last name" />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <Input type="text" id="company-name" name="company-name" label="Company Name (Optional)" />
                </div>
                <div className="md:col-span-4">
                    <div className="w-full">
                        <Input type="text" name="address" id="address" label="Address" />
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                            <Select options={[]} label="Country" />
                        </div>
                        <div className="flex-grow">
                            <Select options={[]} label="Region/State" />
                        </div>
                        <div className="flex-grow">
                            <Select options={[]} label="City" />
                        </div>
                        <div className="flex-grow">
                            <Select options={[]} label="Zip Code" />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                            <Input type="email" id="email" name="email" label="Email" />
                        </div>
                        <div className="flex-grow">
                            <Input type="text" id="phone" name="phone" label="Phone Number" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <input type="checkbox" className="w-5 h-5 rounded-sm text-[#FA8232] focus:ring-0 focus:ring-offset-0 border border-solid border-[#C9CFD2]" name="addressCheck" id="addressCheck" />
                <p className="text-sm font-normal leading-5 text-[#475156]">Ship into different address</p>
            </div>
        </div>
    )
}