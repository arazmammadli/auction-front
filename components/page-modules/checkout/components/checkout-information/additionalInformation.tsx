export function AdditionalInformation() {
    return (
        <div className="w-full">
            <div className="mb-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Additional Information</h1>
            </div>
            <div className="w-full">
                <label htmlFor="info" className="block text-sm font-normal leading-5 text-[#191c1f]">
                    Order Notes <span className="text-[#77878F]">(Optional)</span>
                </label>
                <div className="mt-2">
                    <textarea className="w-full h-[7.75rem] text-sm rounded-sm focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] border border-solid border-[#E4E7E9] placeholder:text-[#929FA5] pt-3 resize-none" name="info" id="info" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                </div>
            </div>
        </div>
    )
}