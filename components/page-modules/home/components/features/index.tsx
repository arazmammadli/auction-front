import { LangType } from "@/global/types/lang.type";
import { FeaturesContent } from "@/page-modules/home/components/features/components/features.content"
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
};

export async function Features(props: Props) {
    const { lang } = props;
    const { features } = await getDictionary(lang);

    return (
        <FeaturesContent data={features} />
    )
};