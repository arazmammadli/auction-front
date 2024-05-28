type Props = {
    text: string
    color: string
}

export function Badge({ text, color }: Props) {

    return (
        <div className="flex w-fit flex-row py-[5px] px-[10px] rounded-sm gap-[10px]" style={{ backgroundColor: color }}>
            <p className="text-base font-semibold leading-6 text-[#141414]">{text}</p>
        </div>
    )
}