"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// لیزی لود کردن کامپوننت Productwindow
const Productwindow = dynamic(() => import("./Productwindow"), {
  loading: () => <div>در حال بارگذاری...</div>, // نمایش در حین بارگذاری
});

export default function ProductAndServiceSection() {
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
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );
    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <section>
      <div className="bg-gray-200 w-full h-[850px] -mt-2" ref={sectionRef}>
        <h1 className="container mx-auto pt-16 text-4xl font-semibold">
          محصولات و خدمات
        </h1>
        <div
          className={`transition-all duration-800 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <Productwindow />
        </div>
      </div>
    </section>
  );
}
