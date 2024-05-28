import { ICard } from './cards.type';

export const billingAddress = {
    head: "Billing Address",
    name: "Araz Mammadli",
    address: "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh",
    phone: "+994-050-622-55-76",
    email: "arazmammadli@gmail.com"
};
export const shippingAddress = {
    head: "Shipping Address",
    name: "Hikmat Rajabli",
    address: "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh",
    phone: "+994-055-233-19-19",
    email: "hikmatrajabli@gmail.com"
};

export const initialCardState: ICard = {
    confirmed: false,
    content: '',
    date: '',
    modified_date: '',
    name: '',
    public_token: '',
    status: false,
    userId: ''
}