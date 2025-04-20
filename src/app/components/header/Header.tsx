"use client";
import Image from "next/image";
import { CloudDownload } from "lucide-react";
import { useState } from "react";
import NavItem from "./NavItem";

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="sticky flex items-center justify-between bg-white w-full h-[76px] border-2 px-4">
      <Image src="/img/headerLogo.jpg" alt="Logo" width={160} height={40} />
      {/* show 5 item in header */}
      <div className="flex items-center  ml-auto">
        <NavItem /> 
      </div>
      {/* show login and sign up in left side */}
      <div className="flex items-center gap-2 ml-4">
        <button className="text-2xl  font-primary px-8 py-0.5 rounded-md border border-primary text-primary cursor-pointer">
          ورود
        </button>
        <button
          className="text-2xl text-white p-3 font-primary px-8 py-1 rounded-md cursor-pointer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            background: `${
              isHover
                ? "linear-gradient(109deg, #4b338a 26.43%, #6f4fbf 77.39%)"
                : "linear-gradient(109deg, #6f4fbf 26.43%,#4b338a  77.39%)"
            }`,
          }}
        >
          ثبت نام
        </button>
        <div className="w-px h-8 mx-2 bg-gray-300" />
        <CloudDownload className="w-6 h-6 text-black" />
      </div>
    </div>
  );
}
