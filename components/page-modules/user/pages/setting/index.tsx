"use client";
import { AccountSettingContainer } from "@/components/page-modules/user/pages/setting/container/account-setting.container";
import { ChangePasswordContainer } from "@/components/page-modules/user/pages/setting/container/change-password.container";
import { Toast } from "@/components/common/toast";
import { useGetPublicLang } from "@/global/requests/get-public-lang";

export function Setting() {
    const { data: langData } = useGetPublicLang();

    if (typeof langData === "undefined") return <h1>Your settings have no content</h1>;

    return (
        <>
            <div className="w-full flex flex-col gap-6">
                <AccountSettingContainer {...langData.dashboard.settings.account} />
                {/* <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                    <AddressContainer head="Billing Address" />
                </div>
                <div className="w-full lg:w-1/2">
                    <AddressContainer head="Shipping Address" />
                </div>
            </div> */}
                <ChangePasswordContainer {...langData.dashboard.settings.change_password} />
            </div>
            <Toast />
        </>
    )
}