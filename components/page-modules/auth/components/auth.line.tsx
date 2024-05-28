type Props = {
    text: string
}

export function Line({ text }: Props) {
    return (
        <div className="w-full h-5 flex items-center relative">
            <div className="w-full h-[1px] bg-[#E4E7E9]"></div>
            <p className="text-sm font-normal leading-5 bg-white px-5 text-[#77878f] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{text}</p>
        </div>
    )
}