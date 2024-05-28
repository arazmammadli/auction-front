import { tags } from "@/components/layout/footer/data/footer.repository";

export function FooterTag() {
    return (
        <div className="flex flex-col gap-3 max-w-[19.5rem]">
            <h1 className="text-base font-medium leading-6 text-white uppercase">Popular Tag</h1>
            <div className="flex flex-row flex-wrap gap-1">
                {
                    tags.map((d) => (
                        <div key={d.id} className="py-[6px] px-3 rounded-sm border border-solid border-[#303639] transition-colors duration-300 hover:border-white hover:bg-[#303639]">
                            <span className="text-sm font-medium leading-5 text-white">{d.head}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}