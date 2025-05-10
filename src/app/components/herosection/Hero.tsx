"use client";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";
import GoogleLogo from "@/components/GoogleLogo";
import BackgroundVideo from "./Video";
import { motion } from "framer-motion";

export default function ResponsiveHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <div className="relative pb-10 ">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full h-auto lg:h-[645px]"
        style={{ background: "linear-gradient(to right, #E6D7FF, #FFF1D4)" }}
      >
        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-header font-secoundary leading-snug md:leading-tight lg:leading-[80px]"
          >
            پیش آ بهار خوبی
            <br />
            تو اصل فصل هایی
          </motion.h1>
          <motion.form variants={itemVariants} className="mt-6 md:mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <input
                type="text"
                placeholder="شماره موبایل خود را وارد کنید"
                className="flex-1 px-4 py-3 font-secoundary rounded-lg bg-white focus:outline-none"
              />
              <GradientButton className="bg-blue-600 text-white px-[55px] py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                ثبت نام
              </GradientButton>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-secoundary text-lg sm:text-xl cursor-pointer max-w-md">
              <GoogleLogo />
              ثبت نام سریع با گوگل
            </button>
          </motion.form>
        </motion.div>

        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-center px-6 md:px-12 lg:px-0 pt-8 lg:pt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[30vw] lg:h-[30vw]">
            <Image
              src="/img/1404-holidays-mobile.webp"
              alt="new_year_Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </div>
      <BackgroundVideo />
    </div>
  );
}
