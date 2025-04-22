"use client";
import Image from "next/image";
import { CloudDownload } from "lucide-react";
import NavItem from "./NavItem";
import GradientButton from "@/components/ui/GradientButton";
import { motion } from "framer-motion";

export default function Header() {
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="sticky flex items-center justify-between bg-white w-full h-[76px] border-2 px-4 z-[100]">
      <div>
        <Image src="/img/headerLogo.jpg" alt="Logo" width={160} height={40} />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        className="flex items-center ml-auto"
      >
        <NavItem />
      </motion.div>

      <div className="flex items-center gap-2 ml-4">
        <button className="text-2xl font-primary px-8 py-0.5 rounded-md border border-primary text-primary cursor-pointer">
          ورود
        </button>
        <GradientButton>ثبت نام</GradientButton>
        <div className="w-px h-8 mx-2 bg-gray-300" />
        <CloudDownload className="w-6 h-6 text-black" />
      </div>
    </div>
  );
}
