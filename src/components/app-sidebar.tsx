"use client";

import * as React from "react";
import {
  Bookmark,
  ClipboardList,
  Layers,
  LayoutDashboard,
  Package,
  ShoppingBag,
  Tags,
  User,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Account",
      url: "/dashboard/account",
      icon: User,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: UsersRound,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: Package,
    },
    {
      title: "Invoices",
      url: "/dashboard/invoices",
      icon: ClipboardList,
    },
    {
      title: "Banners",
      url: "/dashboard/banners",
      icon: Layers,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: ShoppingBag,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: Tags,
    },
    {
      title: "Brands",
      url: "/dashboard/brands",
      icon: Bookmark,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="text-lg font-bold">Admin Shop</div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
