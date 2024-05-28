
export function CardButton({ element }: { element: React.ReactNode }) {
    return (
        <button type="button" className="w-12 h-12 flex justify-center items-center p-3 bg-white hover:bg-[#FA8232] rounded-[50%]">
            {element}
        </button>
    )
}