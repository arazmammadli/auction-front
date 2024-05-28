import React from "react";

type Props = {
    head: string;
    children: React.ReactNode
}

export function FilterContent(props:Props) {
    const {children,head} = props;
    return (
        <div className="flex flex-col gap-4 p-6 rounded border border-solid border-[#E4E7E9]">
            <div className="w-full">
                <h1 className="text-base font-medium leading-6 uppercase text-[#191c1f]">{head}</h1>
            </div>
            {children}
        </div>
    )
}