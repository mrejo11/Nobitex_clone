import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const securityContent = [
  {
    id: 1,
    title: "ذخیره‌ی امن رمزارز",
    subTitle: "نگهداری رمزارزها به‌صورت کاملا سرد با بالاترین استاندارد جهانی",
    img: "/img/security/1.png",
    alt: "secure-storage",
    width: 60,
  },
  {
    id: 2,
    title: "ساختارهای چندامضایی انتقال",
    subTitle: "استفاده از فرایندهای چندامضایی برای تخلیه و انتقال رمزارزها",
    img: "/img/security/2.png",
    alt: "multisig",
    width: 60,
  },
  {
    id: 3,
    title: "پشتیبانی از رمزارزهای معتبر",
    subTitle: "فهرستی از رمزارزهای معتبر براساس شاخص‌های فنی و جهانی",
    img: "/img/security/3.png",
    alt: "supported-coins",
    width: 60,
  },
  {
    id: 4,
    title: "هر رمزارز روی شبکه‌ی اصلی",
    subTitle: "امکان واریز و برداشت روی شبکه‌ی اصلی به‌جای توکن‌های معادل",
    img: "/img/security/4.png",
    alt: "mainnet",
    width: 60,
  },
  {
    id: 5,
    title: "مانیتورینگ هوشمند شبکه‌ها",
    subTitle:
      "بررسی‌های چندلایه‌ی آنچین و آفچین روی فرایندهای اکسچنج مثل واریز، برداشت و معاملات",
    img: "/img/security/5.png",
    alt: "network-monitoring",
    width: 60,
  },
  {
    id: 6,
    title: "امکانات امنیتی متنوع",
    subTitle:
      "ارائه‌ی امکانات امنیتی مثل آدرس‌بوک، کد دو عاملی، کد آنتی‌فیشینگ و لغو اضطراری برداشت",
    img: "/img/security/6.png",
    alt: "security-features",
    width: 60,
  },
];


export default function Security() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto py-24 px-4 max-w-6xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold">امنیت در نوبیتکس</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-gray-200 md:divide-y-0 md:divide-x mt-4">
        {securityContent.map((content, index) => (
          <div
            key={content.id}
            className={`flex items-start p-6 ${
              index >= 3
                ? "border-t border-gray-200 hover:bg-gradient-to-b from-purple-50 to-white"
                : "hover:bg-gradient-to-b from-white to-purple-50"
            } ${index === 2 ? "border-l-0" : ""}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            }}
          >
            <div className="ml-4">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                <Image
                  src={content.img}
                  alt={content.alt}
                  width={content.width}
                  height={content.width}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col text-right">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {content.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {content.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}