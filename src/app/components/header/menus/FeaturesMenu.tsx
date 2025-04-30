"use client";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MenuLink from "./MenuLink";

const features = [
  "استیکینگ",
  "بیلد فارمینگ",
  "استخر مشارکت",
  "نوبی گیفت",
  "مستندات API",
  "پرتفوی سود و زیان",
  "هشدار تعیین قیمت",
  "بازار آزمایشی",
  "دفتر آدرس‌ها",
  "اعتبار خرید کالا",
  "وام خرید کالا",
  "سوشال تریدینگ",
];

export default function FeaturesMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-medium text-base text-right bg-white/1">
        امکانات
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="bg-white rounded-lg shadow-lg p-4 min-w-[500px] -translate-x-[400px]"
        style={{ transform: ` translateY(10px)` }}
      >
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <MenuLink key={index} href="#" text={feature} showArrow />
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
