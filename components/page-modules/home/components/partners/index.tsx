import {Container} from "@/components/common/container";
import {PartnersContainer} from "@/page-modules/home/components/partners/container/partners.container";
import {getPartners} from "@/page-modules/home/components/partners/data/partners.lib";
import {LangType} from "@/global/types/lang.type";
import {getDictionary} from "@/utils/dictionary";

type Props= {
    lang:LangType;
}
export async function Partners(props:Props) {
    const {lang} = props;
    const data = await getPartners();
    const {partners:{desc,head}} = await getDictionary(lang);

    return (
        <Container>
            <PartnersContainer head={head} desc={desc} partners={data}/>
        </Container>
    )
}