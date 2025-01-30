import {Book, Library} from "lucide-react";
import {homePath, ticketsPath} from "@/paths";
import {NavItem} from "./types";

export const navItems: NavItem[] = [
    {
        title: "All Tickets",
        icon: <Library/>,
        href: homePath(),
    },
    {
        title: "My Tickets",
        icon: <Book/>,
        href: ticketsPath(),
    },
];

export const closedClassName =
    "text-background opacity-0 transition-all duration-300 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";