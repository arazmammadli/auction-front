import { Dropdown } from "antd";
import { IoNotificationsOutline } from "react-icons/io5";
import { useGetNotifications } from "./hooks/notification-get.hook";
import { NotificationItem } from "./components/notification.item";
import Loading from "@/components/common/loading";
import { INotification, INotificationResponse } from "./data/notification.type";
import { useEffect, useMemo, useRef } from "react";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";
import { connectSocket } from "@/shared/socket";
import { useInView } from "react-intersection-observer";

type ArgType = {
    prevOffset: number;
} & INotificationResponse;

type Props = {
    position: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | "top" | "bottom" | undefined;
}

export function Notification(props: Props) {

    // props object destructuring
    const { position } = props;

    // hooks
    const { data, isLoading, isFetchingNextPage, refetch, fetchNextPage, hasNextPage } = useGetNotifications();
    const authState = useAuthStore((state) => ({
        accessToken: state.auth.accessToken
    }));
    const { ref, inView, entry } = useInView();

    const notifications = useMemo(() => {
        return data?.pages.reduce((acc: INotification[], page: ArgType): INotification[] => {
            return [...acc, ...page.list];
        }, []);
    }, [data]);

    useEffect(
        () => {
            if (authState.accessToken) {
                connectSocket({ cb: refetch });
            }
        },
        []
    );

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage !== false) {
            fetchNextPage();
        }
    }, [entry, fetchNextPage]);

    return (
        <Dropdown placement={position} overlayClassName="max-w-[23.5rem_!important] rounded border shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] bg-white border-solid border-[#E4E7E9]" dropdownRender={() => (
            <div className="w-full flex flex-col pb-6">
                <div className="py-4 px-6 shadow-[0px_-1px_0px_0px_#E4E7E9_inset]">
                    <h1 className="text-base font-medium leading-6 text-[#191c1f]">Notifications:
                        {data !== undefined && data.pages[0].count > 0 ? <span className="font-normal text-[#5f6c72]"> {data.pages[0].count}</span> : null}
                    </h1>
                </div>
                <div className="flex flex-col max-h-[400px] overflow-y-auto">
                    {isLoading && <Loading />}
                    {
                        notifications !== undefined && notifications.length > 0 ? notifications.map((notification, index) => {
                            if (index === notifications.length - 1) {
                                return (
                                    <div key={index} ref={ref}>
                                        <NotificationItem {...notification} />
                                    </div>
                                )
                            } else {
                                return (
                                    <NotificationItem key={index} {...notification} />
                                )
                            }
                        }) : <p className="text-sm font-normal leading-5 text-[#191c1f]">You have no notification</p>
                    }
                    <div className="w-full flex justify-center items-center py-1 px-6">
                        {
                            isFetchingNextPage && <Loading />
                        }
                    </div>
                </div>
            </div>
        )} trigger={["click"]}>
            <button type="button" className="relative">
                <IoNotificationsOutline color="white" size="32px" />
                {
                    data !== undefined && data.pages[0].count > 0 ? <span className="absolute w-6 h-6 -top-1 -right-1 flex justify-center items-center rounded-[50%] text-xs text-white text-center font-semibold leading-4 border-[1.5px] border-solid border-[#1B6392] bg-red-600">{data?.pages[0].count}</span> : null
                }
            </button>
        </Dropdown>
    )
};