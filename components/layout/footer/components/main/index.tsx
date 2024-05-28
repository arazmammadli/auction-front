import { FooterContact } from "@/components/layout/footer/components/main/footer.contact";
import { FooterApp } from "@/components/layout/footer/components/main/footer.app";
import { FooterMainItem } from "@/components/layout/footer/components/main/main.item";
import { footerData } from "@/components/layout/footer/data/footer.repository";
import { Container } from "@/components/common/container";
import { FooterMenuType } from "../../data/footer.type";

type Props = {
    footerMenu: FooterMenuType[],
    appData: {
        head: string;
    },
    contact: {
        mybid_llc:string;
        contact_text: string;
        follow_us:string;
    }
};

export function FooterMain(props: Props) {
    const { appData, footerMenu, contact } = props;
    return (
        <div className="py-[72px] hidden md:block bg-[#191c1f]">
            <Container>
                <div className="flex md:flex-wrap md:justify-evenly lg:flex-row lg:justify-between items-start gap-6">
                    <FooterContact {...contact} />
                    {
                        footerMenu.map((d) => (
                            <FooterMainItem key={d.id} {...d} />
                        ))
                    }
                    <FooterApp head={appData.head} />
                </div>
            </Container>
        </div>
    )
}