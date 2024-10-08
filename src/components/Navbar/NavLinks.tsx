"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "./navData";

const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentPath = usePathname();

  return (
    <>
      {navData.map(({ _id, title, href }) => {
        const isActive = currentPath === href;

        return (
          <Link
            key={_id}
            href={href}
            className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 text-lg text-gray-700 transition-colors hover:text-white ${
              isActive ? "text-white" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(_id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {(hoveredIndex === _id || isActive) && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-primary text-white backdrop-blur-sm z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10 font-medium">{title}</span>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
