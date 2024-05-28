import { FaUserCircle } from "react-icons/fa";
import { INotification } from "../data/notification.type";
import { useReadNotification } from "../hooks/notification-read.hook";
import Link from "next/link";
import classNames from "classnames";

type Props = {

} & INotification;

export function NotificationItem(props: Props) {
    const regex = /[^<]*(?=\s*<a)/;
    const username = props.content.match(regex);

    return (
        <div className="w-full notification-item mb-2 last:mb-0 bg-[rgb(55_143_233/.2)] relative py-4 px-3 flex flex-row justify-between items-center gap-3">
            <div className="flex flex-row items-center gap-3">
                <div className="w-max">
                    <FaUserCircle size="32px" />
                </div>
                <div className="flex flex-col gap-2">
                    {
                        username && !username[0].includes("div>") ? <h3 className="text-xs font-medium text-[#77878F]">{username[0]}</h3> : null
                    }
                    <p className="text-sm font-normal leading-5 text-[#191c1f]" dangerouslySetInnerHTML={{ __html: props.content }}>
                    </p>
                </div>
            </div>
            <div className="">
                <span>🔵</span>
            </div>
        </div>
    )
};