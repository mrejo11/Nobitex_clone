"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const innovationContent = [
  {
    id: 1,
    title: "درآمد با دعوت دوستان",
    subTitle:
      "با معرفی دوستان خود، ۳۰ درصد از کارمزد هر معامله‌ی آن‌ها را به‌عنوان پاداش دریافت می‌کنید.",
    img: "/img/refral.webp",
    alt: "refral",
    width: 200,
  },
  {
    id: 2,
    title: "تسویه سریع",
    subTitle:
      "با نوبیتکس سریع‌ترین زمان و بیشترین سقف واریز و برداشت را تجربه می‌کنید.",
    img: "/img/fastChekout.webp",
    alt: "fastChekout",
    width: 200,
    scale: "scale-150", 
  },
  {
    id: 3,
    title: "پشتیبانی همیشگی",
    subTitle:
      "۷ روز هفته و ۲۴ ساعته، پاسخگوی تماس‌، ایمیل و یا تیکت‌های شما هستیم.",
    img: "/img/support.webp",
    alt: "support",
    width: 200,
  },
];

// لیزی لود کردن کامپوننت Productwindow
const Securiry = dynamic(() => import("./scurity"), {
  loading: () => <div>در حال بارگذاری...</div>, // نمایش در حین بارگذاری
  
});

const AppDownload = dynamic(() => import("./AppDownload"), {
  loading: () => <div>در حال بارگذاری...</div>, // نمایش در حین بارگذاری
  
});

export default function InnovationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // زمانی که المان در دید قرار گرفت، وضعیت نمایش را تغییر بده
        if (entry.isIntersecting) {
          setIsVisible(true);
          // زمانی که المان دیده شد، دیگر نیازی به مشاهده نیست
          observer.unobserve(entry.target);
        }
      },
      {
        // تنظیمات اینترسکشن آبزرور - المان وقتی ۲۰٪ آن وارد دید شود، تریگر شود
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );
    const currentSection=sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    // پاکسازی آبزرور هنگام آنمانت شدن کامپوننت
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div className="container mx-auto" ref={sectionRef}>
      <div className="flex  justify-center gap-6 mt-8">
        {innovationContent.map((content, index) => {
          return (
            <div
              key={content.id}
              className={`flex flex-col items-center p-4 bg-white rounded-lg transition-all duration-700 ease-out transform 
                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-16"
                }
                ${isVisible ? `transition-delay-${index * 200}` : ""}`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms" 
              }}
            >
              <div className="border-[2px] border-indigo-200 rounded-lg p-2 py-4 bg-purple-50 w-[220px] h-[220px] flex items-center justify-center">
                <Image
                  src={content.img}
                  alt={content.alt}
                  width={content.width}
                  height={content.width}
                  className={`${content.scale || ""} transition-transform duration-500 ${isVisible ? "scale-100" : "scale-50"}`} 
                />
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {content.title}
                </h3>
                <p className="text-md font-semibold text-gray-500 px-4">
                  {content.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Securiry />
      <AppDownload />
    </div>
  );
}