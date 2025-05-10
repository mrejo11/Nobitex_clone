"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import NavLinks from "./MobileNavLink";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-blue-50 h-[66] flex items-center justify-between px-2 z-99">
      <div className="flex items-center gap-2">
        <Image src={"https://nobitex.ir/_nuxt/img/nobitex-logo.7f101ea.svg"} alt="HeaderLogo" width={25} height={25}/>
        <div className="w-px h-8 mx-2 bg-gray-300" />
        <div onClick={() => setIsOpen(!isOpen)} className="z-50">
          {isOpen ? (
            <div className="flex fixed">
              <X />
              <div className="-translate-x-40">
                <Image src={"https://nobitex.ir/_nuxt/img/Logo_FA-Dark.b84a3fa.svg"} alt="headerLogo" width={100} height={20}/>
              </div>
            </div>
          ) : (
            <Menu />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed justify-center top-0 left-0 bg-gray-50 w-screen h-screen flex ">
          <NavLinks />
        </div>
      )}
      <div className="flex gap-4 ">
        <button className="p-2 border border-purple-800 rounded-md px-4">
          ورود
        </button>
        <button className="p-2 text-white rounded-md" style={{background:"linear-gradient(109deg, #6f4fbf 26.43%,#4b338a  77.39%)"}}>
          ثبت نام
        </button>
      </div>
    </div>
  );
}
