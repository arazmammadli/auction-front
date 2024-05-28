import { ValidatorType } from "@/global/types/validator.type";
import { ConfirmResetFormType } from "../data/auth.type";

export function confirmResetPasswordValidator({ cb, form, notify }: ValidatorType<ConfirmResetFormType>) {

    if (!form.password || !form.confirmPassword) {
        return notify("Bütün xanaları doldurun.", "error");
    };

    if (form.password.length < 6) {
        return notify("Parolun uzunluğu minimum 6 olmalıdır.", "error");
    };

    if (form.password !== form.confirmPassword) {
        return notify("Parollar eyni deyil", "error");
    };

    cb();

};