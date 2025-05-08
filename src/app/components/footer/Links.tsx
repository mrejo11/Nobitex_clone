import React from "react";

export default function FooterLinks() {
  return (
    <footer className=" top-0 right-[30vw] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        
        {/* معامله */}
        <div>
          <h2 className="text-lg font-semibold inline-block border-b-2 border-white pb-1 mb-4">
            معامله
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white hover:text-white cursor-pointer">اسپات</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">تعهدی</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">خرید و فروش آنی</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">لیست قیمت‌ها</li>
          </ul>
        </div>

        {/* خدمات */}
        <div>
          <h2 className="text-lg font-semibold inline-block border-b-2 border-purptext-purple-300 pb-1 mb-4">
            خدمات
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">نوبیتکس‌لبز</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">نوبیتکس پرایم</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">نوبیتکس ونچرز</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">آکادمی</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">مجله</li>
          </ul>
        </div>

        {/* امکانات */}
        <div>
          <h2 className="text-lg font-semibold inline-block border-b-2 border-purptext-purple-300 pb-1 mb-4">
            امکانات
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">استیکینگ</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">بیلد فارمینگ</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">استخر مشارکت</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">نوبی‌گیفت</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">مستندات API</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">پرتفوی سود و زیان</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">هشدار تعیین قیمت</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">بازار آزمایشی نوبیتکس</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">دفتر آدرس‌ها</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">اعتبار خرید کالا</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">وام خرید کالا</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">سوشال تریدینگ</li>
          </ul>
        </div>

        {/* خرید ارز دیجیتال */}
        <div>
          <h2 className="text-lg font-semibold inline-block border-b-2 border-purptext-purple-300 pb-1 mb-4">
            خرید ارز دیجیتال
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">خرید ارز دیجیتال</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">خرید بیت‌کوین</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">خرید تتر</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">خرید اتریوم</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">خرید ریپل</li>
          </ul>
        </div>

        {/* قیمت ارز دیجیتال */}
        <div>
          <h2 className="text-lg font-semibold inline-block border-b-2 border-purptext-purple-300 pb-1 mb-4">
            قیمت ارز دیجیتال
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">قیمت ارز دیجیتال</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">قیمت بیت‌کوین</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">قیمت تتر</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">قیمت اتریوم</li>
            <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">قیمت ریپل</li>
          </ul>
        </div>

        {/* تماس با ما و درباره ما */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold inline-block border-b-2 border-purptext-purple-300 pb-1 mb-4">
              تماس با ما
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">ارتباط با ما</li>
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">ثبت تیکت</li>
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">باگ بانتی</li>
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">انتقادات و پیشنهادات</li>
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">Support@nobitex.ir</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold inline-block border-b-2 border-purptext-purple-300 pb-1 mb-4">
              درباره ما
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">موقعیت‌های شغلی</li>
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">گزارش سال ۲۰۲۳</li>
              <li className="text-white font-semibold hover:text-purple-300 cursor-pointer">قوانین و مقررات</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
