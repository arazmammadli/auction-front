import { useGetPublicLang } from "@/global/requests/get-public-lang";
import { Dialog } from "./dialog";
import { BiError } from "react-icons/bi";

type Props = {
    head: string;
    info: string;
    isShowModal: boolean;
    cancelShowModal?: () => void;
    onClickSuccess?: () => void;
}

export function Confirm(props: Props) {

    // props object destructuring
    const { head, info, isShowModal, cancelShowModal, onClickSuccess } = props;
    const {data:langData} = useGetPublicLang();

    return (
        <Dialog centered={true} width={448} footer={null} closable={false} open={isShowModal} >
            <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 inset-x-0 mb-4 mx-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0">
                        <BiError size="30px" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p className="font-bold">{head}</p>
                        <p className="text-sm text-gray-700 mt-1">
                            {info}
                        </p>
                    </div>
                </div>
                <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button onClick={onClickSuccess} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-[rgb(27,99,146,.4)] text-[#1b6392] rounded-lg font-semibold text-sm md:ml-2 md:order-2">{langData?.auction.auction_confirm_yes_btn}</button>
                    <button onClick={cancelShowModal} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1">{langData?.auction.auction_confirm_no_btn}</button>
                </div>
            </div>
        </Dialog>
    )
};