import { FooterContact } from "@/components/layout/footer/components/main/footer.contact";
import { FooterMainItem } from "@/components/layout/footer/components/main/main.item";
import { FooterApp } from "@/components/layout/footer/components/main/footer.app";
import { FooterMenuType } from "../../data/footer.type";

type Props = {
    footerMenu: FooterMenuType[],
    appData: {
        head: string;
    },
    contact: {
        contact_text: string;
        follow_us: string;
        mybid_llc:string;
    }
};

export function MobileFooter(props: Props) {
    const { appData, contact, footerMenu } = props;
    return (
        <div className="min-h-max block md:hidden py-8 pb-24 bg-[#191c1f]">
            <div className="w-full px-[15px]">
                <div className="flex flex-col gap-6">
                    <FooterContact {...contact} />
                    {
                        footerMenu.map((d) => (
                            <FooterMainItem key={d.id} {...d} />
                        ))
                    }
                    <FooterApp head={appData.head} />
                </div>
            </div>
        </div>
    )
}