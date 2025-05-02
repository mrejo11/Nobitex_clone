"use client";
import { MoveLeft } from "lucide-react";
import { useState } from "react";

interface ProductListWindowProps {
  title: string;
  onHover:()=>void
}

export default function ProductListShow({ title,onHover}: ProductListWindowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter=()=>{
    setIsHovered(true)
    onHover()
  }

  const handleMouseLeave=()=>{
    setIsHovered(false)
    onHover()
  }
  return (
    <div
      className="flex items-center font-semibold w-[450px] justify-between text-2xl border-b border-l p-16 hover:bg-purple-100 transition-colors duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{title}</h2>
      {isHovered && (
        <button
          className="rounded-full bg-purple-800 p-1 text-white cursor-pointer"
        >
          <MoveLeft />
        </button>
      )}
    </div>
  );
}
