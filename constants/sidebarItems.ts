import {
    LayoutGrid,
    FileText,
    ShoppingCart,
    CreditCard,
    User,
    Bell,
    Headset,type LucideIcon,
} from 'lucide-react';

export interface MenuItem {
    title: string;
    icon: LucideIcon;
    href: string;
}

export const menuItems = [
    { title: "Dashboard", icon: LayoutGrid, href: "/" },
    { title: "Quotes", icon: FileText, href: "/quotes" },
    { title: "Orders", icon: ShoppingCart, href: "/orders" },
    { title: "Payment History", icon: CreditCard, href: "/payments" },
    { title: "Profile", icon: User, href: "/profile" },
    { title: "Notifications", icon: Bell, href: "/notifications" },
    { title: "Support", icon: Headset, href: "/support" }
];