import { Home, ShoppingCart, Users, BarChart, Coffee } from "lucide-react";
import Index from "./pages/Index.jsx";
import OrderManagement from "./pages/OrderManagement.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import Analytics from "./pages/Analytics.jsx";
import CoffeeMenu from "./pages/CoffeeMenu.jsx";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Order Management",
    to: "/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
    page: <OrderManagement />,
  },
  {
    title: "User Management",
    to: "/users",
    icon: <Users className="h-4 w-4" />,
    page: <UserManagement />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart className="h-4 w-4" />,
    page: <Analytics />,
  },
  {
    title: "Coffee Menu",
    to: "/menu",
    icon: <Coffee className="h-4 w-4" />,
    page: <CoffeeMenu />,
  },
];