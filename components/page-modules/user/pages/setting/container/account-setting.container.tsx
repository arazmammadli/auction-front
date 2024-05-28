"use client";
import { FormEvent } from "react";
import Image from "next/image";
import { Input } from "@/components/common/input";
import { Select } from "@/components/common/select";
import { Button } from "@/components/common/button";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";
import { IUser } from "@/components/page-modules/auth/data/auth.type";
import { FormEntries } from "@/utils/mixed.utils";
import { ISetting } from "../data/setting.type";
import { settingValidator } from "../validators/setting.validator";
import { useNotify } from "@/global/hooks/notify.hook";
import { useAccountUpdate } from "../hooks/account-update.hook";

type Props = {
    account_head: string;
    display_name: string;
    account_email: string;
    account_phone: string;
    save_btn: string;
};

export function AccountSettingContainer(props: Props) {
    const { account_email, account_head, account_phone, display_name, save_btn } = props;
    const user = useAuthStore((state) => state.user) as IUser;
    const settingRequest = useAccountUpdate();
    const pushNotify = useNotify();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const form = FormEntries<ISetting>(e.target);

        settingValidator({
            form,
            notify: pushNotify.notify,
            cb: () => {
                pushNotify.promiseNotify(settingRequest.mutateAsync(form), {
                    error: (data) => data.response.data.msg,
                    loadingText: "Updated...",
                    successText: "Successfully!"
                })
            }
        })
    }

    return (
        <div className="rounded border border-solid border-[#E4E7E9]">
            <div className="py-4 px-3 md:px-6 border-b border-solid border-[#E4E7E9]">
                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">{account_head}</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-3 md:p-6">
                {/* <div className="md:flex-[0_0_11rem]">
                    <div className="relative w-full">
                        <Image src="/assets/images/avatar.png" width="176" height="176" alt="Avatar" />
                        <input type="file" name="fileUpload" className="hidden" id="fileUpload" />
                        <label htmlFor="fileUpload" className="block cursor-pointer absolute top-0 left-0 w-full h-full"></label>
                    </div>
                </div> */}
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1">
                            <div className="w-full">
                                <Input label={account_email} id="email" name="email" defaultValue={user?.email || ""} placeholder="Kevin.gilbert@gmail.com" type="email" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <Input label={account_phone} name="phoneNumber" id="phoneNumber" defaultValue={user?.phoneNumber || ""} placeholder="+1-202-555-0118" type="text" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <Button type="submit" width="w-fit">
                                <span className="text-sm font-bold leading-[48px] text-white uppercase">{save_btn}</span>
                            </Button>
                        </div>
                        {/*
                        <div className="col-span-1">
                            <div className="w-full">
                                <Input label="Username" placeholder="Display name" type="text" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <Input label="Full Name" placeholder="Kevin Gilbert" type="text" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <Input label="Secondary Email" placeholder="Kevin.gilbert@gmail.com" type="email" />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="w-full">
                                <Select name="country" options={[]} label="Country/Region" />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <Select name="states" options={[]} label="States" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Input label="Zip Code" placeholder="1207" type="text" />
                                </div>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}