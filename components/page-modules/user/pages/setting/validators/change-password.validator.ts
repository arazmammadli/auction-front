import { ValidatorType } from "@/global/types/validator.type";
import { IChangePassword } from "../data/setting.type";

export function changePasswordValidator({ cb, form, notify }: ValidatorType<IChangePassword>) {
    if (!form.password || !form.confirmPassword || !form.oldPassword) {
        return notify("Bütün xanaları doldurun.", "error");
    };

    if (form.password.length < 6) {
        return notify("Parolun uzunluğu minimum 6 olmalıdı.", "error");
    };

    if (form.password !== form.confirmPassword) {
        return notify("Parollar eyni deyil.", "error");
    };

    cb();
};