"use client";
import { MoveLeft } from "lucide-react";

interface ProductListWindowProps {
  title: string;
  onHover: () => void;
  isActive: boolean;
}

export default function ProductListShow({
  title,
  onHover,
  isActive,
}: ProductListWindowProps) {
  return (
    <div
      className={`flex items-center font-semibold w-[450px] justify-between text-2xl border-b border-l p-16 ${
        isActive ? "bg-purple-100" : "hover:bg-purple-100"
      } transition-colors duration-300`}
      onMouseEnter={onHover}
    >
      <h2>{title}</h2>
      {isActive && (
        <button className="rounded-full bg-purple-800 p-1 text-white cursor-pointer">
          <MoveLeft />
        </button>
      )}
    </div>
  );
}
