import { ToastType } from '../hooks/notify.hook';

export type ValidatorType<T> = {
    form: T,
    notify: (message: string, type: ToastType) => void,
    cb: () => void,
}