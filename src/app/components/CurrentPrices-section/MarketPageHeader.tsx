'use client';
import { useState } from "react";
import {ChevronLeft}  from 'lucide-react'

export default function MarketPageHeader() {
  const [selected, setSelected] = useState<"toman" | "tether">("toman");

  return (
    <div className="container mx-auto font-bold">
      <section>
        <div>
          <h2 className="text-4xl font-secoundary font-medium">
            قیمت لحظه ای ارز های دیجیتال
          </h2>
        </div>
        <div className="flex items-center justify-between my-10">
          {/* سوییچر با انیمیشن */}
          <div className="relative flex w-64 border font-secoundary text-xl font-light rounded-md overflow-hidden bg-white">
            {/* بک‌گراند متحرک */}
            <div
              className={`absolute top-0 bottom-0 w-1/2 bg-gray-200 scale-95 rounded-md transition-all duration-500 ease-in-out ${
                selected === "toman" ? "left-1/2" : "left-0"
              }`}
            />
            <button
              onClick={() => setSelected("toman")}
              className={`relative z-10 w-1/2 cursor-pointer py-2 transition-colors duration-300 ${
                selected === "toman" ? "text-black" : "text-gray-500"
              }`}
            >
              تومان
            </button>
            <button
              onClick={() => setSelected("tether")}
              className={`relative z-10 w-1/2 cursor-pointer  transition-colors duration-300 ${
                selected === "tether" ? "text-black" : "text-gray-500"
              }`}
            >
              تتر
            </button>
          </div>
          <a href="#" className=
          "flex items-center text-purple-500 font-secoundary hover:text-purple-800">
            قیمت لحظه ای همه رمز ارز ها
          <ChevronLeft className="mr-2"/>
          </a>
        </div>
      </section>
    </div>
  );
}
