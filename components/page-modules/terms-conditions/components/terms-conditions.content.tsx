import { TermsConditionsType } from "../data/terms-conditions.type"

type Props = {
    data: TermsConditionsType;
};

export function TermsConditionsContent(props: Props) {
    const { data } = props;
    return (
        <div className="w-full">
            <div className="w-full text-center mb-7">
                <h1 className="text-4xl font-bold text-[#191c1f]">{data.head}</h1>
            </div>
            <div className="w-full">
                <div className="border border-solid border-[#E4E7E9] rounded p-4 md:p-7">
                    <div className="w-full">
                        <ol className="w-full flex flex-col gap-3">
                            {
                                data.contents.map((content, index) => (
                                    <li key={index} className="text-base text-[#777777] font-normal">{content}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}