import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AppDownload() {
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
      
      const sectioCurrent=sectionRef.current
      if (sectioCurrent) {
        observer.observe(sectioCurrent);
      }
      
      // پاکسازی آبزرور هنگام آنمانت شدن کامپوننت
      return () => {
        if (sectioCurrent) {
          observer.unobserve(sectioCurrent);
        }
      };
    }, []);
  
    
  return (
    <div className={`flex justify-between items-center my-10 px-6 max-w-4xl mx-auto transition-all duration-800 ease-out transform ${isVisible?
      "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    }`}  ref={sectionRef}>
      <div className="text-right">
        <h1 className="text-3xl font-bold mb-4">دانلود اپلیکیشن نوبیتکس</h1>
        <p className="text-lg mb-10 text-gray-500">
          اپلیکیشن نوبیتکس را در گوشی خود نصب کنید، رمزارزهای مورد نظرتان را
          انتخاب و شروع به معامله کنید.
        </p>
        
        {/* First row of app download options */}
        <div className="flex flex-row justify-start gap-10 mb-10">
          <div className="cursor-pointer rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200 p-2">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-1">
                <Image src="/img/myket.dca53d2.svg" alt="مایکت" width={50} height={50} />
              </div>
              <span className="text-sm">مایکت</span>
            </div>
          </div>
          
          <div className="cursor-pointer rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200 p-2">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-1">
                <Image src="/img/bazar.f5df3e8.svg" alt="کافه‌بازار" width={50} height={50} />
              </div>
              <span className="text-sm">کافه‌بازار</span>
            </div>
          </div>
          
          <div className="cursor-pointer rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200 p-2">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-1">
                <Image src="/img/pwa.7f02a43.svg" alt="وب اپلیکیشن" width={50} height={50} />
              </div>
              <span className="text-sm">وب اپلیکیشن</span>
            </div>
          </div>
        </div>
        
        {/* Second row of app download options */}
        <div className="flex flex-row justify-start gap-10">
          <div className="cursor-pointer rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200 p-2">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-1">
                <Image src="/img/sib.svg" alt="سیب اپ" width={50} height={50} />
              </div>
              <span className="text-sm">سیب اپ</span>
            </div>
          </div>
          
          <div className="cursor-pointer rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200 p-2">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-1">
                <Image src="/img/download.svg" alt="اپلیکیشن اندروید" width={50} height={50} />
              </div>
              <span className="text-sm">اپلیکیشن اندروید</span>
            </div>
          </div>
          
          <div className="cursor-pointer rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200 p-2">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-1">
                <Image src="/img/android.svg" alt="API" width={50} height={50} />
              </div>
              <span className="text-sm">API</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile App Image with QR Code */}
      <div className="relative">
        <Image 
          src="/img/download-app.dfbb2e1.png" 
          alt="mobileAppDownload" 
          width={500} 
          height={600} 
          className="object-contain"
        />
      </div>
    </div>
  );
}