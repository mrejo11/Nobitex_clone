"use client";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MenuLink from "./MenuLink";

export default function TransactionMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-medium  text-base bg-white/1 text-right">
        معامله
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className=" backdrop-blur-sm rounded-lg shadow-lg p-4  min-w-[200px] -translate-x-[100px]"
        style={{ transform: ` translateY(10px)` }}
      >
        <div className="flex flex-col gap-2 ">
          <MenuLink href="#" text="اسپات" showArrow />
          <MenuLink href="#" text="تعهدی" showArrow />
          <MenuLink href="#" text="سفارش سریع" showArrow />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
