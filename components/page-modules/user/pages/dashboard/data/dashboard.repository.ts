import { IRecentData } from "./dashboard.type";

export const accountData = {
    img:"araz.jpg",
    fullname:"Araz Mammadli",
    address:"Baku - 1149, Azerbaijan",
    email:"arazmammadli@gmail.com",
    sec_email:"devaraz@gmail.com",
    phone:"+994-050-622-55-76"
}

export const addressData = {
    name: "Araz Mammadli",
    address: "East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh",
    phone: "+994-050-622-55-76",
    email: "arazmammadli@gmail.com"
};

export const columns = [
    {
        key:"1",
        head:"Order ID",
    },
    {
        key:"2",
        head:"Status",
    },
    {
        key:"3",
        head:"Date",
    },
    {
        key:"4",
        head:"Total",
    },
    {
        key:"5",
        head:"Action",
    },
];

export const recentOrders:IRecentData[] = [
    {
        key:"1",
        orderId:"#96459761",
        status:"progress",
        statusText:"IN PROGRESS",
        date:"Dec 30, 2019 05:18",
        total:"$1,500 (5 Products)"
    }
]