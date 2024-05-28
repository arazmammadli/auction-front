import { Container } from "@/components/common/container";

type Props = {
    copyrightTxt: string;
    productTxt: string
};

export function Copyright(props: Props) {
    const { copyrightTxt, productTxt } = props;
    return (
        <div className="py-6 hidden md:block bg-[#191c1f] shadow-[0px_1px_0px_0px_#303639_inset] lg:px-0 px-9">
            <Container>
                <div className="w-full flex justify-between items-center">
                    <p className="text-sm font-normal leading-5 text-[#ADB7BC] text-center">{copyrightTxt}</p>
                    <p className="text-sm font-normal leading-5 text-[#ADB7BC] text-center">{productTxt}</p>
                </div>
            </Container>
        </div>
    )
}