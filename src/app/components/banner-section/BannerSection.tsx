"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full mt-2 relative z-0">
      <style jsx global>{`
        .slick-dots {
          bottom: 12px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
          font-size: 18px;
        }
      `}</style>

      <Slider {...settings}>
        {/* اسلاید اول */}
        <div className="w-full h-[500px] md:h-[300px]  bg-gradient-to-t from-[#b4a7fd] via-white to-[#e1ddf7] overflow-hidden relative">
          <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] ml-auto mr-auto md:ml-72">
            <Image
              src="/img/banner-3.webp"
              alt="slider"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-1/3 right-0 left-0 text-center md:text-right md:mr-24 font-secoundary px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 translate-y-33 md:translate-y-0">
              رمز ارز شما ضامن شما
            </h1>
            <p className="mt-6 text-lg md:text-xl font-bold translate-y-33 md:translate-y-0" style={{ direction: "rtl" }}>
              ۱۰۰ میلیون تومان اعتبار بدون چک و سود در ۴ قسط
            </p>
            <button className="px-4 py-2 md:px-6 md:py-3 translate-y-33 md:translate-y-0 rounded-4xl bg-[#966bed] mt-6 text-white text-lg md:text-xl cursor-pointer font-secoundary">
              دریافت اعتبار
            </button>
          </div>
        </div>

        {/* اسلاید دوم */}
        <div className="w-full h-[500px] md:h-[300px] bg-gradient-to-b from-[#1E1E2F] to-[#3B2F5E] overflow-hidden relative">
          <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] ml-auto mr-auto md:ml-72">
            <Image
              src="/img/banner-2.png"
              alt="slider"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-1/3 right-0 left-0 text-center md:text-right md:mr-24 font-secoundary px-4">
            <h1 className="text-3xl md:text-5xl font-bold  text-white translate-y-44 md:translate-y-0">
              رمز ارز با <span className="text-[#FFEA00]">پشتوانه طلا</span> هم داریم
            </h1>
            <button className="px-4 py-2 md:px-6 md:py-3 translate-y-44 md:translate-y-0  rounded-4xl bg-[#966bed] mt-6 text-white text-lg md:text-xl cursor-pointer font-secoundary">
              همین حالا ثبت نام کنید
            </button>
          </div>
        </div>

        {/* اسلاید سوم */}
        <div className="w-full h-[500px] md:h-[300px]  bg-[#6d5bd4] overflow-hidden relative">
          <div className="relative w-[300px] h-[500px] md:w-[300px] md:h-[300px] ml-auto mr-auto md:ml-72">
            <Image
              src="/img/banner-1.png"
              alt="slider"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-1/3 right-0 left-0 text-center md:text-right md:mr-24 font-secoundary px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white translate-y-44 md:translate-y-0">
              دوره ارز دیجیتال به زبان ساده
            </h1>
            <button className="px-4 py-2 md:px-6 md:py-3 translate-y-44 md:translate-y-0 rounded-4xl bg-white mt-6 text-black text-lg md:text-xl cursor-pointer font-secoundary">
              تماشای دوره
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BannerSection;
