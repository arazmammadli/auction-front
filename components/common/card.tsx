import Image from "next/image";
import { CardButton } from "@/components/common/card.button";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { Badge } from "@/components/common/badge";
import { Rating } from "@/components/common/rate";

type Props = {
    name: string;
    ex_price: string;
    price: string;
    discount: string | null;
    img: string;
    newProduct: boolean;
    inStock: boolean;
    rate: number | null;
};

export function Card({ discount, ex_price, img, rate, inStock, name, newProduct, price }: Props) {
    return (
        <div className="flex flex-col relative gap-2 justify-between border border-solid border-[#E4E7E9] bg-white p-4">
            <div className="relative group">
                <Image src={`/assets/images/${img}`} className="mx-auto" alt="Phone" width="216" height="190" />
                <div className="absolute invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.20)]"></div>
                <div className="absolute invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 w-full h-full top-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-2">
                    <div className="text-[#191c1f] hover:text-white transition-colors duration-300">
                        <CardButton element={<AiOutlineHeart size="24px" />} />
                    </div>
                    <div className="text-[#191c1f] hover:text-white transition-colors duration-300">
                        <CardButton element={<FiShoppingCart size="24px" />} />
                    </div>
                    <div className="text-[#191c1f] hover:text-white transition-colors duration-300">
                        <CardButton element={<BsEye size="24px" />} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-start">
                {rate && <Rating value={rate} />}
                <h1 className="text-sm font-normal leading-5 text-[#191c1f]">{name}</h1>
                <div className="flex flex-row items-center gap-1">
                    <p className="text-base font-normal leading-6 text-[#ADB7BC]">
                        <del>{ex_price}</del>
                    </p>
                    <p className="text-lg font-semibold leading-6 text-[#2da5f3]">{price}</p>
                </div>
            </div>
            <div className="absolute top-4 left-4">
                {discount && <Badge color="#EFD33D" text={discount} />}
                {newProduct ? <Badge color="#EE5858" text="HOT" /> : null}
                {!inStock ? <Badge color="#929FA5" text="SOLD OUT" /> : null}
            </div>
        </div>
    )
}