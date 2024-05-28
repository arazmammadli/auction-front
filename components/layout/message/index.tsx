import { LangType } from "@/global/types/lang.type";
import { MessageDropdown } from "./components/message.dropdown";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
};

export async function Message(props: Props) {
    const { lang } = props;
    const { message } = await getDictionary(lang);
    return (
        <div className="fixed right-[10px] bottom-36 lg:bottom-24 float-right z-20">
            <MessageDropdown {...message} />
        </div>
    )
};