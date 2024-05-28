import { Select } from "@/components/common/select";
import { Button } from "@/components/common/button";

export function LeaveRating() {

    const ratingOptions = [
        { value: 'start-rating-5', label: '5 Star Rating' },
        { value: 'start-rating-4', label: '4 Star Rating' },
        { value: 'start-rating-3', label: '3 Star Rating' },
        { value: 'start-rating-2', label: '2 Star Rating' },
        { value: 'start-rating-1', label: '1 Star Rating' },
    ];

    return (
        <div className="w-full flex min-h-[300px] flex-col gap-6 rounded">
            <div className="w-full py-4 px-6 border-b border-solid border-[#E4E7E9]">
                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">Billing address</h1>
            </div>
            <div className="w-full px-6 pb-6">
                <form action="" className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <Select label="Rating" options={ratingOptions} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="country" className="block mb-2 text-sm font-normal leading-5 text-[#191c1f]">Rating</label>
                            <textarea className="h-[124px] rounded-sm placeholder:text-[#929FA5] resize-none w-full focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9] border border-solid border-[#E4E7E9] pl-4 pr-12 pt-3 " placeholder="Write down your feedback about our product & services" name="feedback" id="feedback" ></textarea>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button width="w-fit" bgColor="bg-[#FA8232]" type="submit">
                            <span className="text-white text-base font-bold leading-[56px] uppercase">Publish Review</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
} 