"use client";
import { MoveLeft } from "lucide-react";
import { useState } from "react";

interface ProductListWindowProps {
  title: string;
}

export default function ProductListShow({ title }: ProductListWindowProps) {
  const [isHover, setIshover] = useState(false);

  return (
    <>
      <div
        className="flex items-center font-semibold w-[450px] justify-between text-2xl border-b border-l p-16 hover:bg-purple-100 transition-colors duration-300"
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={()=>{setIshover(false)}}
      >
        <h2> {title} </h2>
        <button
          className={
            isHover
              ? "rounded-full bg-purple-800 p-1 text-white cursor-pointer"
              : ""
          }
        >
          {isHover ? <MoveLeft /> : null}
        </button>
      </div>
    </>
  );
}
