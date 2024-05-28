import { aboutData } from "@/components/page-modules/about/data/about.repository"
import { OurTeamItem } from "@/components/page-modules/about/components/about.item";
import { TeamType } from "../data/about.type";

type Props = {
    head: string;
    teams: TeamType;
};

export function OurTeamMember(props: Props) {
    const { head, teams } = props;
    return (
        <div className="w-full">
            <div className="mb-10 text-center">
                <h1 className="text-[32px] font-semibold leading-10 text-[#191c1f]">{head}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    teams.map((d) => (
                        <OurTeamItem key={d.id} {...d} />
                    ))
                }
            </div>
        </div>
    )
}