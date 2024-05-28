import { AuthStoreTypes } from './auth.store';

export const registerFields = [
    {
        type: 'text',
        name: 'displayName',
        label: '*Name Surname',
        placeholder: 'Name Surname',
    },
    {
        type: 'text',
        name: 'phoneNumber',
        label: '*Phone',
        placeholder: 'Example: 994518880802',
    },
    {
        type: 'email',
        name: 'email',
        label: '*Email Address',
        placeholder: 'Email Address',
    },
    {
        type: 'password',
        name: 'password',
        label: '*Password',
        placeholder: 'Password',
    },
    {
        type: 'password',
        name: 'confirmPassword',
        label: '*Confirm Password',
        placeholder: 'Confirm Password',
    },
];

export const initialAuth: AuthStoreTypes['auth'] = {
    accessToken: null,
    isLogin: false
}