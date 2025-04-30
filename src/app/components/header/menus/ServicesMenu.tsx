"use client";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MenuLink from "./MenuLink";

const services = ["نوبیتکس لبز", "نوبیتکس ونچرز", "آکادمی", "مجله"];

export default function ServicesMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-medium text-base text-right bg-white/1">
        خدمات
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="bg-white rounded-lg shadow-lg p-4 min-w-[250px] -translate-x-[150px]"
        style={{ transform: ` translateY(10px)` }}
      >
        <div className="flex flex-col gap-2">
          {services.map((service, index) => (
            <MenuLink key={index} href="#" text={service} showArrow />
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
