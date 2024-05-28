import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { PiInfo, PiArchive, PiTelegramLogo, PiNotePencil, PiShoppingBag, PiFileTextDuotone, PiCarProfileLight, PiPhoneCall } from "react-icons/pi";
import { RiAuctionLine } from "react-icons/ri";
import { MdComputer, MdOutlinePrivacyTip } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import {BsLine} from "react-icons/bs";

export const menuIcons = [
    {
        icon: <AiOutlineHome size="24px" />,
        segment: null
    },
    {
        icon: <PiInfo size="24px" />,
        segment: "about"
    },
    {
        icon: <PiArchive size="24px" />,
        segment: "archive"
    },
    {
        icon: <PiNotePencil size="24px" />,
        segment: "blog"
    },
    {
        icon: <RxQuestionMarkCircled size="24px" />,
        segment: 'faq'
    },
    {
        icon: <PiFileTextDuotone size="24px" />,
        segment: "rules"
    },
    {
        icon: <MdOutlinePrivacyTip size="24px" />,
        segment: "privacy"
    }
];

export const socialIcons = [
    {
        id: 1,
        icon: <PiTelegramLogo size="18px" />,
        href: "https://t.me/MyBid_news",
        head: "Telegram"
    },
    {
        id: 2,
        icon: <FaFacebook size="18px" />,
        href: "https://www.facebook.com/profile.php?id=100094082527580",
        head: "Facebook"
    },
    {
        id: 3,
        icon: <FaLinkedin size="18px" />,
        href: "https://www.linkedin.com/company/mybid-az/",
        head: "Linkedin"
    },
    {
        id: 4,
        icon: <BsLine size="18px" />,
        href: "/",
        head: "Line"
    },
    {
        id: 5,
        icon: <FaInstagram size="18px" />,
        href: "https://www.instagram.com/mybid.az/",
        head: "Instagram"
    }
];

export const mobileMenuIcons = [
    {
        icon: <AiOutlineHome size="24px" />,
        segment: null
    },
    {
        icon: <PiInfo size="24px" />,
        segment: "about"
    },
    {
        icon: <PiArchive size="24px" />,
        segment: "archive"
    },
    {
        icon: <PiNotePencil size="24px" />,
        segment: "blog"
    },
    {
        icon: <RxQuestionMarkCircled size="24px" />,
        segment: 'faq'
    },
    {
        icon: <PiFileTextDuotone size="24px" />,
        segment: "rules"
    },
    {
        icon: <MdOutlinePrivacyTip size="24px" />,
        segment: "privacy"
    },
    {
        icon: <PiShoppingBag size="24px" />,
        segment: 'marketplace'
    },
    {
        icon: <RiAuctionLine size="24px" />,
        segment: 'auction-shop'
    },
    {
        icon: <MdComputer size="24px" />,
        segment: 'online-shop'
    },
    {
        icon: <PiCarProfileLight size="24px" />,
        segment: 'public-shop'
    },
    {
        icon: <IoPersonOutline size="24px" />,
        segment: 'sellers'
    },
];

export const locales = [
    {
        key: "en",
        name: "English",
        img: "english.png"
    },
    {
        key: "az",
        name: "Azerbaijan",
        img: "azerbaijan.png"
    },
    {
        key: "ru",
        name: "Russia",
        img: "russia.png"
    },
    {
        key: "tr",
        name: "Turkish",
        img: "turkey.png"
    }
];

// export const categoryData = [
//     {
//         label: 'Computer & Laptop',
//         id: '1',
//         href: "computer-laptop"
//     },
//     {
//         label: 'Computer Accessories',
//         id: '2',
//         href: "computer-accessories"
//     },
//     {
//         label: 'SmartPhone',
//         id: '3',
//         children: [
//             {
//                 key: "3-1",
//                 label: "All"
//             },
//             {
//                 key: "3-2",
//                 label: "iPhone"
//             },
//             {
//                 key: "3-3",
//                 label: "Samsung"
//             },
//             {
//                 key: "3-4",
//                 label: "Realme"
//             },
//             {
//                 key: "3-5",
//                 label: "Xiaomi"
//             },
//             {
//                 key: "3-6",
//                 label: "Oppo"
//             },
//             {
//                 key: "3-7",
//                 label: "Vivo"
//             },
//             {
//                 key: "3-8",
//                 label: "OnePlus"
//             },
//             {
//                 key: "3-9",
//                 label: "Huawei"
//             },
//             {
//                 key: "3-10",
//                 label: "Infinix"
//             },
//             {
//                 key: "3-11",
//                 label: "Tecno"
//             }
//         ],
//         href: "smartphone"
//     },
//     {
//         label: 'Headphone',
//         id: '4',
//         href: "headphone"
//     },
//     {
//         label: 'Mobile Accessories',
//         id: '5',
//         href: "mobile-accessories"
//     },
//     {
//         label: 'Gaming Consolesories',
//         id: '6',
//         href: "gaming-consolesories"
//     },
//     {
//         label: 'Camera & Photo',
//         id: '7',
//         href: "camera-photo"
//     },
//     {
//         label: 'TV & Homes Appliances',
//         id: '8',
//         href: "tv-home"
//     },
//     {
//         label: 'Watchs & Accessories',
//         id: '9',
//         href: "watch-accessories"
//     },
//     {
//         label: 'GPS & Navigation',
//         id: '10',
//         href: "gps-navigation"
//     },
//     {
//         label: 'Warable Technology',
//         id: '11',
//         href: "warable-technology"
//     },
// ];
