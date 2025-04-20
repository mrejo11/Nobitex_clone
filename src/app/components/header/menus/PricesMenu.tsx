"use client";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MenuLink from "./MenuLink";

export default function PricesMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-medium text-base text-right">
        قیمت لحظه ای
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="bg-white rounded-lg shadow-lg p-4 min-w-[200px] -translate-x-[40px]"
        style={{ transform: ` translateY(10px)` }}
      >
        <div className="flex flex-col gap-2">
          <MenuLink href="#" text="بیتکوین" showArrow />
          <MenuLink href="#" text="اتریوم" showArrow />
          <MenuLink href="#" text="تتر" showArrow />
          <MenuLink href="#" text="تون کوین" showArrow />
          <MenuLink href="#" text="لیست قیمت رمزارزها" showArrow />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
