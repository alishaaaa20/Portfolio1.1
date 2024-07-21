import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-gray-300 container mx-auto px-5">
      {/* <div className="bg-secondary/90 px-10 py-8 rounded-lg flex justify-between mb-10 hidden md:flex shadow-lg">
        <div>
          <H2 className="font-semibold text-black">Work Inquiry</H2>
          <P className="font-medium text-gray-600">Let's work together</P>
        </div>
        <div className="items-center flex">
          <a href="#contact">
            <Button className="text-white text-lg bg-primary hover:bg-primary-dark transition-colors duration-300">
              Contact me
            </Button>
          </a>
        </div>
      </div> */}
      {/* <div className="flex justify-center">
        <a
          href="mailto:alishakhatri8888@gmail.com"
          className="text-2xl no-underline hover:text-primary transition-colors duration-300"
        >
          alishakhatri8888@gmail.com
        </a>
      </div> */}
      <div className="flex flex-col items-center text-center">
        <ul className="flex gap-6 mt-4">
          <li className="rounded-full border-primary border-2 p-2 hover:bg-primary transition-colors duration-300">
            <Link
              href="https://www.facebook.com/alisha.khatri.58173/"
              target="_blank"
            >
              <FaFacebook size={20} className="text-primary hover:text-white" />
            </Link>
          </li>
          <li className="rounded-full border-primary border-2 p-2 hover:bg-primary transition-colors duration-300">
            <Link
              href="https://www.instagram.com/alishaaaa1920/"
              target="_blank"
            >
              <FaInstagram
                size={20}
                className="text-primary hover:text-white"
              />
            </Link>
          </li>
          <li className="rounded-full border-primary border-2 p-2 hover:bg-primary transition-colors duration-300">
            <Link
              href="https://www.linkedin.com/in/alisha-khatri-3b1675220/"
              target="_blank"
            >
              <FaLinkedinIn
                size={20}
                className="text-primary hover:text-white"
              />
            </Link>
          </li>
          <li className="rounded-full border-primary border-2 p-2 hover:bg-primary transition-colors duration-300">
            <Link href="https://github.com/alishaaaa20" target="_blank">
              <FaGithub size={20} className="text-primary hover:text-white" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center mt-10">
        © 2024 <span className="font-semibold text-primary">Alisha Khatri</span>
        . All rights reserved. This site is{" "}
        <a
          href="https://github.com/alishaaaa20/Portfolio1.1"
          target="_blank"
          className="text-branding no-underline hover:underline transition-colors duration-300"
        >
          open-sourced.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
