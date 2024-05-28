import { ValidatorType } from '@/global/types/validator.type';
import { IAuth } from '../data/auth.type';

export function loginValidator({ cb, form, notify }: ValidatorType<IAuth>) {
  if (!form.username || !form.password) {
    return notify('Bütün xanaları doldurun.', 'error');
  }

  if (!form.providerId) {
    return notify('Provider ID yoxdur. Daha sonra daxil olun.', 'error');
  }

  cb();
}
