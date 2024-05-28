import { Button } from "@/components/common/button";
import { IOrder, IOrderPay, IStatus, PaymentStatus } from "../data/orders.type";
import { useNotify } from "@/global/hooks/notify.hook";
import { Dialog } from "@/components/common/dialog";
import { PayContainer } from "@/components/container/pay.container";
import { useOrderPay } from "../hooks/order-pay.hook";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

type Props = {
} & IOrder;

export function OrdersItem(props: Props) {

    // hooks
    const [isShowModal, setIsShowModal] = useState(false);
    const orderPayRequest = useOrderPay();
    const params = useParams();
    const lang = params.lang as LangType;

    // push notify
    const pushNotify = useNotify();

    // props object destructuring
    const { status, totalPrice, expireDate, id, userId } = props;

    const handlePay = (payType: IOrderPay["payType"]) => {

        // Order pay request parametr
        const orderData: IOrderPay = {
            id,
            payType: payType,
            userId
        }

        pushNotify.promiseNotify(orderPayRequest.mutateAsync(orderData), {
            error: (data) => data.response.data.error,
            loadingText: payType === 1 ? "Yönləndirilir..." : "Ödəniş edilir...",
            successText: "Uğurlu!"
        });
    };

    function onRequestPay() {
        onOpenModal();
    }

    const paymentBody = (status: IStatus) => {
        const { id } = status;

        const context = id === PaymentStatus.WAITING ? (
            <Button onClick={onRequestPay} type="button" width="w-fit">
                <span className="text-sm font-bold uppercase leading-7 text-white">Payment</span>
            </Button>
        ) : (
            <p className="text-sm leading-5 font-normal text-[#5F6C72]">Yoxdur</p>
        );

        return context;
    };

    // modal

    function onOpenModal() {
        setIsShowModal(true);
    };

    function onCloseModal() {
        setIsShowModal(false);
    };

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4">
                    <p className="text-sm font-medium leading-5 text-[#5F6C72]">{status.name}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-sm font-semibold leading-5 text-[#FA8232]">₼ {totalPrice}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-sm font-normal leading-5 text-[#5F6C72]">{expireDate.split('T')[0]} {expireDate.split('T')[1]}</p>
                </td>
                <td className="px-6 py-4">
                    {paymentBody(status)}
                </td>
                {/* <td className="px-6 py-4">
                    <Link href={`/${lang}/user/orders/` + id} as={`/${lang}/user/orders/` + id} locale={lang} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        <PiEye size="20px" />
                    </Link>
                </td> */}
            </tr>
            <Dialog width={900} closable={false} open={isShowModal} onCancel={onCloseModal}>
                <PayContainer aggId={1} type="orderPay" onPay={handlePay} />
            </Dialog>
        </>
    )
}