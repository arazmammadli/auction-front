import { ValidatorType } from '@/global/types/validator.type';
import { IConfirmPhone } from '../data/auth.type';

export function otpConfirmValidator({ cb, form, notify }: ValidatorType<IConfirmPhone>) {
  if (!form.code || !form.phone) {
    return notify('Bütün xanaları doldurun.', 'error');
  }

  cb();
}
