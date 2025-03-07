"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(current < lastScrollY);
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          y: visible ? 0 : -100, 
          opacity: visible ? 1 : 0 
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0 top-8 z-[5000] mx-auto w-fit max-w-2xl",
          className
        )}
      >
        <div className="relative">
          {/* Glass-like background container */}
          <div className="absolute inset-0 -z-10 bg-black-200 rounded-2xl blur-xl opacity-75" />
          
          <motion.div
            className={cn(
              "relative flex items-center justify-between px-6 py-4 bg-black-200 rounded-2xl",
              "border border-white/[0.15] shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
              "backdrop-blur-md"
            )}
          >
            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((navItem, idx) => (
                <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="relative px-4 py-2 group" // Added 'group' class
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover effect background - use group-hover for more reliable effects */}
                <motion.span
                  className="absolute inset-0 -z-10 bg-white/[0.1] rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === idx ? 1 : 0,
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                  // Add a slightly longer duration to prevent flicker
                  transition={{ duration: 0.3, type: "spring", damping: 15 }}
                />
              
                {/* Item content */}
                <span className="relative flex items-center space-x-2">
                  {navItem.icon && (
                    <motion.span
                      // Make icon rotation more reliable with custom variants
                      variants={{
                        idle: { rotate: 0 },
                        hover: { rotate: 10 }
                      }}
                      animate={hoveredIndex === idx ? "hover" : "idle"}
                      className="text-neutral-400"
                    >
                      {navItem.icon}
                    </motion.span>
                  )}
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors duration-200">
                    {navItem.name}
                  </span>
                </span>
              
                {/* Underline effect */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-white/70"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredIndex === idx ? "100%" : 0,
                  }}
                  // Make the transition slightly longer and smoother
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </Link>
              ))}
            </div>

            {/* Subtle glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </motion.div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};