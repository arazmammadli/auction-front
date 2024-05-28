type Props = {
    icon: React.ReactNode;
    text: string
}

export function SocialButton({ icon, text }: Props) {
    return (
        <button type="button" className="flex w-full py-3 px-4 rounded-sm border bg-white border-solid border-[#E4E7E9]">
            {icon}
            <p className="w-full text-sm font-normal leading-5 text-[#475156] text-center">{text}</p>
        </button>
    )
}