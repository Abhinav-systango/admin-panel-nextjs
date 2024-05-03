import { NavLinksI } from "@/utils/interface";
import { FaHome } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaMortarPestle } from "react-icons/fa";

export const NavLinks:NavLinksI[] = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: <FaHome />
    }, 
    {
        name: "Order List",
        link: '/dashboard/orderlist',
        icon: <FaStream />
    },
    {
        name: "Customers",
        link: "/dashboard/customers",
        icon: <FaRegUser />
    },
    {
        name: "Restro",
        link: "/dashboard/restro",
        icon: <FaBuilding />
    },
    {
        name: "Foods",
        link: "/dashboard/foods",
        icon: <FaMortarPestle />
    }
]