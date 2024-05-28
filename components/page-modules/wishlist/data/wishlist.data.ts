import { IWishlistData } from "./wishlist.type";

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
        head: "Stock Status",
    },
    {
        key: "4",
        head: "Actions",
    }
];

export const wishlistData: IWishlistData[] = [
    {
        key: "1",
        img: "ps5.png",
        shortInfo: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
        exprice: "$1299",
        price: "$999",
        onStock: true,
    },
    {
        key: "2",
        img: "ps5.png",
        shortInfo: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
        exprice: "$250.00",
        price: "$220.00",
        onStock: false,
    }
];