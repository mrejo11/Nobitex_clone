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
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200/50 z-[100]">
      <div className="flex items-center justify-between h-[76px] px-4">
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
    </header>
  );
}
