"use client";
import { GoArrowRight } from "react-icons/go";

type Props = {
    head: string;
    btn_text: string;
    overview: string;
    input_placeholder: string;
};

export function NewsLetterContainer(props: Props) {
    const { btn_text, overview, head, input_placeholder } = props;

    return (
        <>
            <div className="flex flex-col gap-3 justify-center items-center mb-8">
                <h1 className="text-[32px] text-center font-semibold leading-10 text-white">{head}</h1>
                <div className="max-w-[33.5rem] text-center">
                    <p className="text-base font-normal leading-6 text-white opacity-70">{overview}</p>
                </div>
            </div>
            <div className="w-full md:max-w-[37.5rem] flex flex-row mx-auto items-center bg-white p-3 rounded shadow-[0px_12px_24px_0px_rgba(0,0,0,0.12) mb-8">
                <input type="email" name="email" id="email" placeholder={input_placeholder} className="w-full md:min-w-[26.5rem] focus:ring-0 focus:ring-offset-0 border-white focus:border-[#fff] py-3 outline-none placeholder:text-[#77878F]" />
                <button type="button" className="min-w-fit flex flex-row gap-2 items-center px-3 md:px-6 bg-[#FA8232] rounded-sm">
                    <span className="text-sm font-bold leading-[48px] uppercase text-white">{btn_text}</span>
                    <GoArrowRight color="#fff" />
                </button>
            </div>
        </>
    )
};