import { FaGooglePlay } from "react-icons/fa";
import { SiApple } from "react-icons/si";

type Props = {
    head: string
};

export function FooterApp(props: Props) {
    const { head } = props;
    return (
        <div className="flex flex-col gap-3 max-w-[19.5rem]">
            <h1 className="text-base font-medium leading-6 text-white uppercase">{head}</h1>
            <div className="flex flex-col gap-3">
                <div className="w-full cursor-pointer flex flex-row items-center gap-4 rounded bg-[#303639] px-5 py-4">
                    <FaGooglePlay size="32px" color="#fff" />
                    <div className="flex flex-col gap-1 justify-between">
                        <h3 className="text-xs font-normal leading-[13px] text-white opacity-60">Get it now</h3>
                        <h1 className="text-sm font-semibold leading-5 text-white">Google Play</h1>
                    </div>
                </div>
                <div className="w-full cursor-pointer flex flex-row items-center gap-4 rounded bg-[#303639] px-5 py-4">
                    <SiApple size="32px" color="#fff" />
                    <div className="flex flex-col gap-1 justify-between">
                        <h3 className="text-xs font-normal leading-[13px] text-white opacity-60">Get it now</h3>
                        <h1 className="text-sm font-semibold leading-5 text-white">App Store</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}