import { PrivacyPolicyType } from "../data/privacy-policy.type"

type Props = {
    data: PrivacyPolicyType;
}

export function PrivacyPolicyContent(props: Props) {
    const { data } = props;
    return (
        <div className="w-full">
            <div className="w-full text-center mb-7">
                <h1 className="text-4xl font-bold text-[#191c1f]">{data.head}</h1>
            </div>
            <div className="w-full text-left mb-7">
                <p className="text-sm font-medium text-[#191c1f] leading-5 mb-3">{data.location}</p>
                <p className="text-sm font-normal text-[#777] leading-5">{data.desc}</p>
            </div>
            <div className="w-full">
                <div className="border border-solid border-[#E4E7E9] rounded p-4 md:p-7">
                    {
                        data.data.map((item) => (
                            <div key={item.id} className="w-full mb-7">
                                <h3 className="text-lg leading-6 font-bold text-[#777] text-left mb-4">{item.head}</h3>
                                <div className="w-full flex flex-col gap-1">
                                    {
                                        item.contents.map((content) => (
                                            <p key={content.id} className="text-sm leading-5 text-[#777777] font-normal">{content.info}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}