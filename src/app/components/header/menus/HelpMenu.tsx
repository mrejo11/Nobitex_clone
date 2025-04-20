"use client";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MenuLink from "./MenuLink";

const helpItems = [
  "راهنمای شروع به کار",
  "احراز هویت و سطوح کاربری",
  "قیمت‌ها و کارمزدها",
  "امنیت حساب کاربری",
  "امنیت کیف پول",
  "سوالات متداول",
];

export default function HelpMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-medium text-base text-right">
        راهنما
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white rounded-lg shadow-lg p-4 min-w-[500px] -translate-x-[400px] "
      style={{ transform: ` translateY(10px)` }}
      >
        <div className="grid grid-cols-2 gap-3">
          {helpItems.map((item, index) => (
            <MenuLink key={index} href="#" text={item} showArrow />
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
