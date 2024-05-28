import { IShoppingData } from "./shopping.type";

export const columns = [
    {
        key: "1",
        head: "Products",
    },
    {
        key: "2",
        head: "Price",
    },
    {
        key: "3",
        head: "Quantity",
    },
    {
        key: "4",
        head: "Sub-Total",
    }
];

export const wishlistData: IShoppingData[] = [
    {
        key: "1",
        img: "wishlist.png",
        shortInfo: "4K UHD LED Smart TV with Chromecast Built-in",
        exprice: "$99",
        price: "$70",
    },
    {
        key: "2",
        img: "wishlist.png",
        shortInfo: "Wired Over-Ear Gaming Headphones with USB",
        exprice: "",
        price: "$250",
    }
];