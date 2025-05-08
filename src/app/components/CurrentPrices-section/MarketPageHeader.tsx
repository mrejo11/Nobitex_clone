"use client";
import { ChevronLeft } from "lucide-react";
import { useSelected } from "../contexs/SelectedContex";

export default function MarketPageHeader() {
  const { selected, setSelected } = useSelected();

  return (
    <div className="container mx-auto px-4 sm:px-6 font-bold">
      <section>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-secoundary font-medium text-right">
            قیمت لحظه‌ای ارزهای دیجیتال
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6 sm:my-8 md:my-10">
          {/* سوییچر با انیمیشن */}
          <div className="relative flex w-full sm:w-64 border font-secoundary text-base sm:text-lg md:text-xl font-light rounded-md overflow-hidden bg-white">
            {/* بک‌گراند متحرک */}
            <div
              className={`absolute top-0 bottom-0 w-1/2 bg-gray-200 scale-95 rounded-md transition-all duration-500 ease-in-out ${
                selected === "toman" ? "left-1/2" : "left-0"
              }`}
            />
            <button
              onClick={() => setSelected("tether")}
              className={`relative z-10 w-1/2 cursor-pointer py-2 transition-colors duration-300 ${
                selected === "tether" ? "text-black" : "text-gray-500"
              }`}
            >
              تتر
            </button>
            <button
              onClick={() => setSelected("toman")}
              className={`relative z-10 w-1/2 cursor-pointer py-2 transition-colors duration-300 ${
                selected === "toman" ? "text-black" : "text-gray-500"
              }`}
            >
              تومان
            </button>
          </div>
          <a
            href="#"
            className="flex items-center text-purple-500 font-secoundary text-sm sm:text-base hover:text-purple-800 w-full sm:w-auto justify-end"
          >
            قیمت لحظه‌ای همه رمز ارزها
            <ChevronLeft className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}