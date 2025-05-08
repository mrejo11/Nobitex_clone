"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, CloudDownload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem';
import GradientButton from '@/components/ui/GradientButton';

export default function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

 

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Image
            src="/img/headerLogo.jpg"
            alt="Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavItem />
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="font-semibold px-6 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition">
            ورود
          </button>
          <GradientButton>ثبت نام</GradientButton>
          <CloudDownload className="w-6 h-6" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          >
            <div className="flex flex-col p-4 space-y-4">
              {/* Column Menu Items */}
              <nav className="flex flex-col divide-y divide-gray-200">
                {/* Ensure NavItem renders each link in a column */}
                <NavItem  />
              </nav>

              {/* Column Actions */}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="w-full text-center font-semibold px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition">
                  ورود
                </button>
                <GradientButton className="w-full">ثبت نام</GradientButton>
                <div className="flex justify-center pt-2">
                  <CloudDownload size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}