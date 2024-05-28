import Image from "next/image";

type Props = {
    data: {
        subhead: string;
        head: string;
        description: string;
    }
};

export function AboutContent(props: Props) {
    const { description, head, subhead } = props.data;
    return (
        <div className="w-full flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-8">
                <div className="lg:p-6">
                    <div className="py-2 px-4 w-fit mb-3 rounded-sm bg-[#2DA5F3]">
                        <span className="text-sm font-semibold leading-5 text-white">{subhead}</span>
                    </div>
                    <div className="w-full mb-3">
                        <h1 className="text-3xl text-[#191c1f] font-semibold leading-[48px]">{head}</h1>
                    </div>
                    <div className="w-full flex flex-col gap-3" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
            <div className="w-full">
                <Image src="/assets/images/auction.jpg" className="w-full lg:min-w-[40.5rem]" width="648" height="667" alt="Auction" />
            </div>
        </div>
    )
}