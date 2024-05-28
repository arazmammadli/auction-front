import { ValidatorType } from '@/global/types/validator.type';

export function otpSendValidator({ cb, form, notify }: ValidatorType<{ phone: number }>) {
  if (!form.phone) {
    return notify('Bütün xanaları doldurun.', 'error');
  }

  cb();
}
