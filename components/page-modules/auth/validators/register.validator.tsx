import { ValidatorType } from '@/global/types/validator.type';
import { IRegister } from '../data/auth.type';

export function registerValidator({ cb, form, notify }: ValidatorType<IRegister>) {
  if (
    !form.email ||
    !form.displayName ||
    !form.phoneNumber ||
    !form.password ||
    !form.confirmPassword
  ) {
    return notify('Bütün xanaları doldurun.', 'error');
  }

  if (form.password.length < 6) {
    return notify("Şifrənin uzunluğu minimum 6 olmalıdı.", "error");
  };

  if (form.password !== form.confirmPassword) {
    return notify('Parollar eyni deyil.', 'error');
  };

  cb();
}
