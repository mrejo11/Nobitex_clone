"use client";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";
import GoogleLogo from "@/components/GoogleLogo";
import BackgroundVideo from "./Video";
import { motion } from "framer-motion";

export default function Hero() {
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
    <div className="relative pb-10">
      <div
        className="grid grid-cols-6 w-full h-[645px]"
        style={{ background: "linear-gradient(to right, #E6D7FF, #FFF1D4)" }}
      >
        <motion.div
          className="col-span-3 mt-24 mr-64"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold text-header font-secoundary leading-[80px]"
          >
            پیش آ بهار خوبی
            <br />
            تو اصل فصل هایی
          </motion.h1>
          <motion.form variants={itemVariants} className="mt-8 space-y-4">
            <div className="flex gap-2 w-24">
              <input
                type="text"
                placeholder="شماره موبایل خود را وارد کنید"
                className="flex-1 px-4 py-3 font-secoundary rounded-lg bg-white focus:outline-none"
              />
              <GradientButton className="bg-blue-600 text-white px-[55px] py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                ثبت نام
              </GradientButton>
            </div>
            <button className="w-100 flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-secoundary text-xl cursor-pointer">
              <GoogleLogo />
              ثبت نام سریع با گوگل
            </button>
          </motion.form>
        </motion.div>

        <motion.div
          className="relative w-[30vw] h-[30vw] -translate-x-24"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/img/1404-holidays-mobile.webp"
            alt="new_year_Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
      <BackgroundVideo />
    </div>
  );
}
