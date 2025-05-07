import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AppDownload() {
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
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-4xl mx-auto my-10 px-6 transition-all duration-800 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        flex flex-col md:flex-row items-center md:justify-between gap-8
      `}
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-right">
        <h1 className="text-3xl font-bold mb-4">دانلود اپلیکیشن نوبیتکس</h1>
        <p className="text-lg mb-6 text-gray-500">
          اپلیکیشن نوبیتکس را در گوشی خود نصب کنید، رمزارزهای مورد نظرتان را انتخاب و شروع به معامله کنید.
        </p>

        {/* Download Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {/* Option Card */}
          {[
            { src: "/img/myket.dca53d2.svg", label: "مایکت" },
            { src: "/img/bazar.f5df3e8.svg", label: "کافه‌بازار" },
            { src: "/img/pwa.7f02a43.svg", label: "وب اپلیکیشن" },
            { src: "/img/sib.svg", label: "سیب اپ" },
            { src: "/img/download.svg", label: "اندروید" },
            { src: "/img/android.svg", label: "API" },
          ].map((item) => (
            <div
              key={item.label}
              className="cursor-pointer flex flex-col items-center p-3 rounded-xl border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200"
            >
              <Image src={item.src} alt={item.label} width={50} height={50} />
              <span className="mt-2 text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* App Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/img/download-app.dfbb2e1.png"
          alt="mobileAppDownload"
          width={400}
          height={480}
          className="object-contain"
        />
      </div>
    </section>
  );
}
