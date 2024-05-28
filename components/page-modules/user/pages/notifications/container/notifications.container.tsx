"use client";
import Loading from "@/components/common/loading";
import { Table } from "@/components/common/table";
import { useGetPublicLang } from "@/global/requests/get-public-lang";
import { useGetAllNotifications } from "../hooks/notifications-all.hook";
import { useEffect, useMemo } from "react";
import { INotification, INotificationResponse } from "@/components/layout/notification/data/notification.type";
import { useInView } from "react-intersection-observer";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";
import { connectSocket } from "@/shared/socket";
import { getDateForUTCLocal } from "@/utils/date";
import classNames from "classnames";
import { useReadNotification } from "@/components/layout/notification/hooks/notification-read.hook";
import { useNotify } from "@/global/hooks/notify.hook";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

type ArgType = {
    prevOffset: number;
} & INotificationResponse;

export function NotificationsContainer() {

    // hooks
    const { data: langData } = useGetPublicLang();
    const { data, isLoading, refetch, fetchNextPage, hasNextPage } = useGetAllNotifications();
    const readNotificationRequest = useReadNotification();
    const pushNotify = useNotify();
    const { ref, inView, entry } = useInView();
    const params = useParams();
    const lang = params.lang as LangType;

    const notifications = useMemo(() => {
        return data?.pages.reduce((acc: INotification[], page: ArgType): INotification[] => {
            return [...acc, ...page.list];
        }, []).sort((a, b) => +a.read - +b.read);
    }, [data]);

    useEffect(
        () => {
            connectSocket({ cb: refetch });
        },
        []
    );

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage !== false) {
            fetchNextPage();
        }
    }, [entry, fetchNextPage]);

    const handleRead = async (queryData: { id: string, read: boolean }) => {
        pushNotify.promiseNotify(readNotificationRequest.mutateAsync(queryData), {
            error: (data) => data.response.data.msg,
            loadingText: "The operation is ongoing",
            successText: "Notification readed."
        });
    };

    if (typeof langData === "undefined") return <h1>Page no content</h1>;

    return (
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
            <div className="w-full py-5 px-6">
                <h1 className="text-lg font-medium leading-6 text-[#191c1f]">{langData.dashboard.notifications.head}</h1>
            </div>
            <div className="w-full max-h-[28.75rem] overflow-y-auto">
                {isLoading && <div className="w-full flex justify-center">
                    <Loading />
                </div>}
                <Table columns={langData.dashboard.notifications.columns}>
                    {
                        (notifications && notifications.length > 0) && notifications.map((notification, index) => {
                            const createdAt = getDateForUTCLocal(notification.createdDate, lang);
                            return (
                                <tr key={index} className="bg-white relative border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className={classNames("px-6 py-4", {
                                        ["flex items-center gap-x-2"]: notification.read === false
                                    })}>
                                        {
                                            !notification.read ? "🔵" : ""
                                        }
                                        <p className="text-sm font-medium leading-5 text-[#5F6C72]" dangerouslySetInnerHTML={{ __html: notification.content }}></p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-semibold leading-5 text-[#FA8232]">{createdAt}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-normal leading-5 text-[#5F6C72]">{notification.read ? langData.dashboard.notifications.readed : langData.dashboard.notifications.notReaded}</p>
                                    </td>
                                    {
                                        !notification.read ? <td onClick={() => handleRead({ id: notification.id, read: true })} className="px-6 py-4 absolute cursor-pointer top-0 left-0 w-full h-full bg-[rgb(55_143_233/.2)]">
                                        </td> : null
                                    }
                                </tr>
                            )
                        })
                    }
                    {(notifications && notifications.length > 0) && <tr ref={ref} className="bg-white relativ w-full"></tr>}
                </Table>
            </div>
        </div>
    )
}