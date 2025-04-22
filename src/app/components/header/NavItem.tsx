"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// Import custom menu components
import TransactionMenu from "./menus/TransactionMenu";
import PricesMenu from "./menus/PricesMenu";
import FeaturesMenu from "./menus/FeaturesMenu";
import ServicesMenu from "./menus/ServicesMenu";
import HelpMenu from "./menus/HelpMenu";

export default function NavItem() {
  return (
    <NavigationMenu
      dir="rtl"
      className="mx-5 relative z-[100]"
      viewport={false}
    >
      <NavigationMenuList className="flex items-center gap-6">
        <TransactionMenu />
        <PricesMenu />
        <FeaturesMenu />
        <ServicesMenu />
        <HelpMenu />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
