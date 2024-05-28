"use client";
import { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

type Props = {
    time: number;
};

export default function Clock(props: Props) {
    const { time: initial } = props;
    const [time, setTime] = useState(new Date(initial));

    useEffect(
        () => {
            const timer = setInterval(() => {
                setTime(new Date);
            }, 1000);

            return () => clearInterval(timer);
        }, []
    );

    const formatTime = (date: Date) => {
        const options: any = {
            hour: '2-digit',
            minute: '2-digit',
            second: "numeric",
            timeZone: 'Asia/Baku',
        };
        return new Intl.DateTimeFormat('az-AZ', options).format(date);
    };

    return (
        <div className="flex flex-row gap-1 items-center">
            <AiOutlineClockCircle size="20px" color="#4ADE80" />
            <div className="inline-flex items-center w-16 rounded-md bg-[rgb(34_197_94/0.1)] px-2 py-1 text-xs font-medium text-[#4ADE80] ring-1 ring-inset ring-[rgb(34_197_94/0.2)]">
                {formatTime(time)}
            </div>
        </div>
    )
};