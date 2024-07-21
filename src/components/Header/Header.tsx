"use client";
import React, { useEffect, useState, ReactNode } from "react";
import Container from "../Container";
import NavLinks from "../Navbar/NavLinks";
import { Button } from "../ui/button";
import { Popover } from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { navData } from "../Navbar/navData";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Type for MobileNavLink props
interface MobileNavLinkProps {
  children: ReactNode;
  href: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ children, href }) => {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block text-base leading-7 tracking-tight text-gray-700"
    >
      {children}
    </Popover.Button>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Clean up the scroll event listener when the component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white ${
        isScrolled && "shadow-xl shadow-primary/20"
      }`}
    >
      <nav>
        <Container className="relative z-50 flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/789/original/Screenshot_2024-01-23_at_4.04.48_PM-removebg-preview.png?1706005275"
                alt="logo"
                className="w-24 h-12"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-10 items-center text-xl">
            <NavLinks />
          </div>

          <div className="flex items-center lg:hidden">
            {/* Mobile NavLinks */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <IoIosArrowUp className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLink href={href} key={_id}>
                                {title}
                              </MobileNavLink>
                            ))}
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
