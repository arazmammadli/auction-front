import { ValidatorType } from "@/global/types/validator.type";

export function resetWithPhoneValidator({ cb, form, notify }: ValidatorType<{ phoneNumber: string }>) {
    const validRegex = /^994(?:50|51|55|70|77|10|99)\d{7}$/;

    if (!form.phoneNumber) {
        return notify("Zəhmət olmasa nömrəni daxil edin.", "error");
    };

    if (form.phoneNumber.includes("+")) {
        return notify("+ operatorundan daxil etməyin.", "error")
    };

    if (!form.phoneNumber.match(validRegex)) {
        return notify("Nömrə 99450XXXXXXX bu variantda olmalıdı.", "error");
    }

    cb();
}