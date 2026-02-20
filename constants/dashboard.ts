
export const statsData = [
  {
    title: "Pending Quotes",
    value: "3",
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400",
    bg: "bg-purple-500/10",
    route: "/quotes", // Add route to each object
  },
  {
    title: "Active Orders",
    value: "5",
    gradient: "from-indigo-500 to-blue-500",
    iconColor: "text-indigo-400",
    bg: "bg-indigo-500/10",
    route: "/orders", // Add route to each object
  },
  {
    title: "Payment History",
    value: "12",
    gradient: "from-pink-500 to-rose-500",
    iconColor: "text-pink-400",
    bg: "bg-pink-500/10",
    route: "/payments", // Add route to each object
  },
];
export const recentQuotes = [
  { status: "Pending" },
  { status: "Approved" },
  { status: "Approved" },
];

export const activeOrders = [
  "In Progress",
  "Shipped",
  "Delivered",
];

export const quickActions = [
  { label: "Request Quotes", route: "/quotes/new", primary: true },
  { label: "Track Order", route: "/orders/track" },
  { label: "View Invoices", route: "/payments" },
  { label: "Get Support", route: "/support" },
];
