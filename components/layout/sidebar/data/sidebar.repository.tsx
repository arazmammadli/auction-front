// import { FiSearch } from 'react-icons/fi';
import {
  PiStack,
  PiNotebook,
  PiGear,
} from 'react-icons/pi';
import { IoMdNotificationsOutline } from "react-icons/io";
import {RiAuctionLine} from "react-icons/ri";
import { FiSearch } from 'react-icons/fi';

export const sidebarMenuIcons = [
  {
    icon: <PiStack size='20px' />,
    segment: null,
  },
  {
    icon: <FiSearch size="20px" />,
    segment: "archive",
  },
  {
    icon: <RiAuctionLine size="20px" />,
    segment: "orders",
  },
  {
    icon: <IoMdNotificationsOutline size='20px' />,
    segment: 'notifications',
  },
  {
    icon: <PiNotebook size='20px' />,
    segment: 'cards',
  },
  {
    icon: <PiGear size='20px' />,
    segment: 'setting',
  },
];
