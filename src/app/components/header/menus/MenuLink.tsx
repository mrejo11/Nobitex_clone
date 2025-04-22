"use client";
import Link from "next/link";
import { ChevronDown, MoveLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuLinkProps {
  title?: string;
  text?: string;
  href?: string;
  description?: string;
  showArrow?: boolean;
  submenus?: {
    title: string;
    href: string;
  }[];
}

const MenuLink = ({
  title,
  text,
  href,
  description,
  showArrow = false,
  submenus,
}: MenuLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayText = title || text || "";

  if (!submenus && href) {
    return (
      <Link
        href={href}
        className="block p-3 rounded-md hover:bg-third transition-colors duration-150 text-right"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-gray-900 flex items-center justify-between">
          {displayText}
          {showArrow && (
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.15 }}
                >
                  <MoveLeft size={20} color="#9333ea" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          )}
        </span>
        {description && (
          <span className="text-sm text-gray-500 mt-1">{description}</span>
        )}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
        {displayText}
        <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-150" />
      </button>
      <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
        {submenus?.map((submenu, index) => (
          <Link
            key={index}
            href={submenu.href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
          >
            {submenu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuLink;
