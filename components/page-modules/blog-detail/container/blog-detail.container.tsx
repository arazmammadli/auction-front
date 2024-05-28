import Image from "next/image";
import { PiStack, PiUserCircle, PiCalendarBlank } from "react-icons/pi";
import { getBlog } from "../lib/get-blog";
import { getDateForUTCLocal } from '@/utils/date';
import { LangType } from "@/global/types/lang.type";

type Props = {
    slug: string;
    lang: LangType;
};

export async function BlogDetailContainer(props: Props) {
    const { slug, lang } = props;
    const data = await getBlog(slug);
    const createdAt = getDateForUTCLocal(data.created_date, lang);
    if (!data) <></>

    return (
        <div className="w-full">
            <div className="mb-12">
                <Image src={data.image} width="1320" height="740" alt="Blog Detail Image" />
            </div>
            <div className="w-full">
                <div className="w-full">
                    <div className="w-full flex flex-col gap-4 mb-8">
                        <div className="block">
                            <div className="flex flex-row gap-4">
                                {/* <div className="flex flex-row items-center gap-[6px]">
                                    <PiStack size="24px" color="#FA8232" />
                                    <span className="text-sm font-normal leading-5 text-[#475156]">Electronics</span>
                                </div> */}
                                <div className="flex flex-row items-center gap-[6px]">
                                    <PiUserCircle size="24px" color="#FA8232" />
                                    <span className="text-sm font-normal leading-5 text-[#475156]">Admin</span>
                                </div>
                                <div className="flex flex-row items-center gap-[6px]">
                                    <PiCalendarBlank size="24px" color="#FA8232" />
                                    <span className="text-sm font-normal leading-5 text-[#475156]">{createdAt}</span>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-[32px] font-semibold leading-10 text-[#191c1f]">{data.title}</h1>
                    </div>
                    <div className="w-full">
                        <section className="flex flex-col gap-8" id="blog-detail" dangerouslySetInnerHTML={{ __html: data.content }} />
                        {/* <p className="text-base font-normal leading-6 text-[#475156]">
                            Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum, ut interdum tellus. Donec quis ex quis metus sodales facilisis ut nec ex. Ut commodo lacus vel odio venenatis, sit amet lacinia lacus cursus. Ut sodales laoreet dapibus. Sed aliquam nisl odio, sed blandit erat placerat sed. Mauris eleifend, magna in convallis congue, orci est fermentum leo, at tincidunt massa ligula semper dolor. Nunc tristique enim in risus tristique rutrum eget ac eros.
                        </p>
                        <div className="p-10 bg-[#FFF3EB] shadow-[4px_0px_0px_0px_#FA8232_inset]">
                            <div className="flex flex-row items-start gap-6">
                                <RiDoubleQuotesL className="min-w-[56px_!important] h-14" color="#FA8232" />
                                <p className="text-xl font-normal leading-7 text-[#191c1f]">Vintage meets vogue is the only way to describe this serif typeface. Neue World encompasses the mode high-fashion aesthetic of the 1960s with a commercial take.</p>
                            </div>
                        </div>
                        <p className="text-base font-normal leading-6 text-[#475156]">
                            Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu turpis. Ut nisl velit, mattis at augue vel, molestie egestas justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat volutpat. Praesent vitae orci blandit, semper felis ac, interdum lacus.
                        </p>
                        <p className="text-base font-normal leading-6 text-[#475156]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui. Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam venenatis quis. Nunc ligula lectus, posuere sit amet ultrices ut, porttitor efficitur mauris. Aliquam bibendum vitae turpis sed molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in enim. Sed fringilla, mi porttitor sodales vehicula, felis enim gravida nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit interdum eget.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}