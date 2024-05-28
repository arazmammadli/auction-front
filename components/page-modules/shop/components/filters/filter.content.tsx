import React from "react"

type Props = {
    children: React.ReactNode;
    head: string
}

export function FilterContent({ children, head }: Props) {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full">
                <h1 className="text-base font-medium leading-6 uppercase text-[#191c1f]">{head}</h1>
            </div>
            {children}
        </div>
    )
}