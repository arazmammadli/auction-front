import { Container } from "@/components/common/container";
import { AboutContent } from "@/components/page-modules/about/components/about.content";
import { OurTeamMember } from "@/components/page-modules/about/components/about.team";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
}

export async function About(props: Props) {
    const { lang } = props;
    const { about } = await getDictionary(lang);

    return (
        <>
            <div className="w-full py-[72px]">
                <Container>
                    <AboutContent data={about} />
                </Container>
            </div>
            <div className="w-full py-[72px] shadow-[0px_1px_0px_0px_#E4E7E9_inset]">
                <Container>
                    <OurTeamMember head={about.our_team_head} teams={about.teams} />
                </Container>
            </div>
        </>
    )
};