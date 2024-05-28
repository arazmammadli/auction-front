import { ValidatorType } from "@/global/types/validator.type";
import { ISetting } from "../data/setting.type";

export function settingValidator({ cb, form, notify }: ValidatorType<ISetting>) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!form.email || !form.phoneNumber) {
        return notify("Bütün xanaları doldurun.", "error");
    }

    if (!form.email.match(validRegex)) {
        return notify("Emaili düzgün daxil edin.", "error");
    };

    cb();
}