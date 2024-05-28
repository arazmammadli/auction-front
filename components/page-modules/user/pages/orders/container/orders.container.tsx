"use client";
import { Table } from "@/components/common/table";
import { useGetOrdersArchive } from "../hooks/get-orders.hook";
import { IOrder, IOrderPay, IStatus, PaymentStatus } from "../data/orders.type";
import { useNotify } from "@/global/hooks/notify.hook";
import { Toast } from "@/components/common/toast";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/common/loading";
import { useGetPublicLang } from "@/global/requests/get-public-lang";
import { OrdersItem } from "../components/orders.item";

type ArgType = {
    prevOffset: number;
    list: IOrder[];
    count: number;
}

export function OrdersContainer() {

    // hooks
    const { data, nextPage, hasNextPage, isLoading } = useGetOrdersArchive();
    const pushNotify = useNotify();
    const { data: langData } = useGetPublicLang();

    const searchParams = useSearchParams();
    const payResult = searchParams.get("result") as "success" | "failed";

    const orders = useMemo(() => {
        return data?.pages.reduce((acc: any[], page: ArgType): IOrder[] => {
            return [...acc, ...page.list];
        }, []);
    }, [data])

    useEffect(() => {
        switch (payResult) {
            case "success":
                pushNotify.notify("Ödənişiniz uğurla yerinə yetirildi!", "success");
                return;
            case "failed":
                pushNotify.notify("Ödənişiniz yerinə yetirilmədi.", "error");
            default:
                break;
        }
    }, [searchParams]);

    if (typeof langData === "undefined") return <h1>Page no content</h1>;

    return (
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">{langData.dashboard.order.head}</h1>
            </div>
            <div className="w-full max-h-[28.75rem] overflow-y-auto">
                <Table columns={langData.dashboard.order.columns}>
                    {
                        orders ? orders.map((order) => (
                            <OrdersItem key={order.id} {...order} />
                        )) : null
                    }
                </Table>
                <div className="w-full flex justify-center">
                    {isLoading && <Loading />}
                </div>
            </div>
            {
                hasNextPage && <div className="w-full flex flex-row items-center justify-start gap-5 pl-6 py-4 border-t border-solid border-[#E4E7E9]">
                    <button onClick={() => nextPage()} type="button" className="w-fit px-3 py-1 rounded text-[#FA8232] border-2 border-solid border-[#FA8232]">
                        {langData.dashboard.order.load_more_btn}
                    </button>
                </div>
            }
            <Toast />
        </div>
    )
}