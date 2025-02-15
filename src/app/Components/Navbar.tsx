"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Menu, X, Globe } from "lucide-react";

// Dynamically import Framer Motion components to prevent SSR conflicts
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button), { ssr: false });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "features", href: "/feature" },
    { name: "technology", href: "/technology" },
    { name: "agent", href: "/solution" },
    { name: "pricing", href: "/pricing" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <MotionDiv
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <MotionDiv
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Globe className="w-6 h-6 text-white" />
            </MotionDiv>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              Agentia
            </span>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="relative px-3 py-2 group">
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-200">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MotionButton
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </MotionButton>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
