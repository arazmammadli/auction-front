import { ValidatorType } from "@/global/types/validator.type";

export function resetWithEmailValidator({ cb, form, notify }: ValidatorType<{ email: string }>) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!form.email) {
        return notify("Xananı boş qoymayın.", "error");
    };

    if (!form.email.match(validRegex)) {
        return notify("Emaili düzgün daxil edin.", "error");
    };

    cb();
};