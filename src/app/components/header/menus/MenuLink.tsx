"use client";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuLinkProps = {
  href: string;
  text: string;
  description?: string;
  showArrow?: boolean;
  className?: string;
};

export default function MenuLink({
  href,
  text,
  description,
  showArrow = false,
  className = "",
}: MenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClassName = description
    ? "flex flex-col p-3 rounded-md hover:bg-third transition-colors duration-150 text-right"
    : "block p-3 rounded-md hover:bg-third transition-colors duration-150 text-right";

  return (
    <NavigationMenuLink asChild>
      <Link href={href} className={`${baseClassName} ${className}`}>
        {description ? (
          <>
            <span
              className="font-medium text-blue-700 flex items-center justify-between"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {text}
              {showArrow && (
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MoveLeft size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              )}
            </span>
            <span className="text-sm text-gray-500 mt-1">{description}</span>
          </>
        ) : (
          <span
            className="text-gray-900 flex items-center justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {text}
            {showArrow && (
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MoveLeft size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            )}
          </span>
        )}
      </Link>
    </NavigationMenuLink>
  );
}
