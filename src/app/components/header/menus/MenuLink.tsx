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
        className="block p-3 rounded-md hover:bg-white/20 transition-colors duration-150 text-right"
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
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="w-full p-3 rounded-md bg-white/1 transition-colors duration-150 text-right">
        <span className="text-gray-900 flex items-center justify-between">
          {displayText}
          {showArrow && <ChevronDown size={20} />}
        </span>
      </button>

      {submenus && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-full top-0 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-[200px]"
            >
              <div className="flex flex-col gap-2">
                {submenus.map((submenu, index) => (
                  <Link
                    key={index}
                    href={submenu.href}
                    className="block p-3 rounded-md hover:bg-white/20 transition-colors duration-150 text-right"
                  >
                    {submenu.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default MenuLink;
