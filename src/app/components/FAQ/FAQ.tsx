"use client"
import { Plus, Minus } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Paragraph from "./Paragraph"

const faqContent = [
  { id: 1, title: "نوبیتکس چیست؟", SubTitle: "نوبیتکس اولین و بزرگ‌ترین بازار ایرانی ارزهای دیجیتال و بستری امن و ساده برای خرید و فروش مستقیم و سریع رمزارزها و سرمایه‌گذاری در بازار آن‌ها است. در صرافی معتبر نوبیتکس، بی‌واسطه معامله کنید." },
  { id: 2, title: "قیمت رمزارزها را از کجا ببینم؟", SubTitle: "در صفحه‌ی قیمت لحظه‌ای می‌توانید لیست قیمت رمزارزهای لیست‌شده در نوبیتکس را ببینید. همچنین، در صفحه‌ی بازار هر رمزارز علاوه بر قیمت، می‌توانید به نمودار تغییرات قیمت و سایر نمودارهای مربوط به آن دسترسی داشته باشید و خرید و فروش انجام دهید." },
  { id: 3, title: "چطور شروع کنم و برای شروع معامله چه چیز هایی لازم هست؟", SubTitle: "ابتدا با شماره موبایل خود یا دسترسی سریع گوگل حساب کاربری بسازید. بعد از وارد کردن اطلاعات هویتی خود در کمتر از 5 دقیقه، خرید و فروش رمزارز را شروع کنید." },
  { id: 4, title: "کسب درامد در نوبیتکس چه روش هایی دارد؟", SubTitle: "عضویت در طرح‌های استیکینگ و ییلد فارمینگ، با نگهداری‌ ارزهای دیجیتال و دریافت پاداش رمزارزی برای مشارکت در فرایندهای اجماع و پروتکل‌های مالی غیرمتمرکز" },
  { id: 5, title: "چگونه بیت کوین تتر و سایر رمزارزها را در نوبیتکس بخرم؟", SubTitle: "در صفحه‌ی لیست ارزهای دیجیتال، می‌توانید قیمت بیت کوین، تتر و سایر رمزارزها را ببینید و با انتخاب رمزارز مورد نظر خود به صفحه‌ی بازار آن بروید و خرید و فروش و سفارش‌گذاری کنید. همچنین، می‌توانید برای سادگی و سرعت بیشتر، در پنل سایت نوبیتکس با «سفارش سریع» در لحظه با قیمت بازار خرید و فروش کنید." },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    )

    const current = sectionRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <>
      {/* FAQ Section with animation */}
      <section
        ref={sectionRef}
        className={`w-full transition-all duration-800 ease-out transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 ">
          <h1 className="py-8 text-center text-2xl font-bold">سوالات متداول</h1>
          {faqContent.map((faq) => (
            <div key={faq.id} className="mb-4">
              <div
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-200 rounded-t-md
                  ${openId === faq.id ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <div
                  className={`text-lg font-semibold transition-colors duration-200
                    ${openId === faq.id ? 'text-gray-600' : 'text-gray-800'}`}
                >
                  {faq.title}
                </div>
                <div className="p-1 hover:rounded-full hover:bg-purple-500 hover:text-white transition-all duration-150">
                  {faq.id === openId ? <Minus /> : <Plus />}
                </div>
              </div>
              {faq.id === openId && (
                <div className="px-4 py-3 leading-7 text-gray-500 bg-gray-100 rounded-b-md transition-all duration-200">
                  {faq.SubTitle}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

            {/* Paragraph Section Full Width */}
      <Paragraph />
    </>
    )
}