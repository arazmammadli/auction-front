import { IOrderData } from "./order-history.type";

export const columns = [
    {
        key: "1",
        head: "Order ID",
    },
    {
        key: "2",
        head: "Status",
    },
    {
        key: "3",
        head: "Date",
    },
    {
        key: "4",
        head: "Total",
    },
    {
        key: "5",
        head: "Action",
    },
];

export const orders: IOrderData[] = [
    {
        key: "1",
        orderId: "#96459761",
        status: "progress",
        statusText: "IN PROGRESS",
        date: "Dec 30, 2019 05:18",
        total: "$1,500 (5 Products)"
    }
]