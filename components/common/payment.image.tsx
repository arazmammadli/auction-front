import Image from "next/image";
import epoint from "@/public/assets/icons/epoint.svg";

export function PaymentMethodImages() {
    return (
        <div className="w-full flex flex-row items-center gap-2">
            <Image src="/assets/images/visa-logo.png" className="h-[58px] object-cover" objectFit="cover" width="50" height="58" alt="Visa" />
            <Image src="/assets/images/mastercard.png" className="h-[58px] object-cover" objectFit="cover" width="50" height="58" alt="Mastercard" />
            <Image src={epoint} alt="Epoint" />
            <Image src="/assets/images/3d-secure.png" width="50" height="58" className="h-[58px] object-cover" alt="3d Secure" />
        </div>
    )
};