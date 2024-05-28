import { IUser } from "@/components/page-modules/auth/data/auth.type"

export interface IOrder {
    id: string;
    userId: string;
    appUser: IUser;
    statusId: number;
    status: IStatus;
    totalPrice: number;
    expireDate: string;
    isSuceess: boolean;
    items: any[];
    paymentDetails: any[];
    payments: any[];
};

export interface IStatus {
    id: number;
    name: string;
};

export interface IOrdersResponse {
    list: IOrder[];
    count: number;
};

export interface IOrderPay {
    id: string,
    payType: OrderPay,
    userId: string
};

export enum OrderPay {
    OneTime = 1,
    SavedCard = 2,
    PayAndSave = 3,
}

export enum PaymentStatus {
    ACCEPTED = 1,
    WAITING = 3,
    SUCCEEDED = 5,
    DECLINED = 6,
};
