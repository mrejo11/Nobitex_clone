"use client";
import { useState } from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function GradientButton({
  children,
  onClick,
  className = "",
}: GradientButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const background = isHover
    ? "linear-gradient(109deg, #4b338a 26.43%, #6f4fbf 77.39%)"
    : "linear-gradient(109deg, #6f4fbf 26.43%,#4b338a  77.39%)";

  return (
    <button
      className={`text-2xl text-white font-primary px-8 py-1 rounded-md cursor-pointer transition-all ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ background }}
    >
      {children}
    </button>
  );
}
