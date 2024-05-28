export interface IOrderData {
    key: string;
    orderId: string;
    status: "progress" | "completed" | "canceled";
    statusText:string;
    date:string;
    total:string;
}