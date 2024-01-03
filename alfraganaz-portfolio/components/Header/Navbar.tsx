"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // scroll nav function
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavbarFixed(scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isNavbarFixed
          ? "fixed top-0 w-full z-50 h-24 pr-40 pl-44 pt-4  bg-white border-b-4  border-zinc-500 flex justify-between item-center  3xl:pl-60 3xl:pr-80 2xl:pl-50 2xl:pr-60 xl:pl-36 lg:pr-32 lg:pl-36 md:h-16 md:pr-16 md:pl-20 md:pt-2 sm:h-14 sm:pt-0 sm:pl-8 sm:pr-4 xs:h-14 xs:pt-2  xs:pl-4 xs:pr-3"
          : "w-full z-50 h-24 pr-40 pl-44 pt-4  bg-light flex justify-between item-center ease-in-out  3xl:pl-60 3xl:pr-80 2xl:pl-50 2xl:pr-60 xl:pl-36 lg:pr-32 lg:pl-36 md:h-16 md:pr-16 md:pl-20 md:pt-2  sm:pl-8 sm:pr-0 sm:h-14 sm:pt-0 xs:h-14 xs:pt-2 xs:pl-4 xs:pr-3"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          className="md:w-40 md:h-12 sm:w-36 sm:h-12 xs:w-32 xs:h-10"
          width="208"
          height="69"
          priority
        />
      </Link>
      {/* Navbar Contact */}
      <div className={isOpen ? "mobile-menu" : "mobile-menu active"}>
        <div className="w-32 h-full  flex justify-between items-center md:w-44">
          <Image src="/Phone.svg" alt="Phone_icon" width="20" height="20" />

          <p className="w-28 h-6  font-montserrat font-semibold text-xs">
            +998 91 648 82 35
          </p>
        </div>
        <span className="w-0.5 h-10 mr-2 rounded-md  bg-bluish-green md:h-8  md:mr-2 sm:hidden xs:hidden"></span>
        <button className="w-40 h-3/5  bg-black text-light-grey hover:bg-zinc-600  rounded-lg font-montserrat  font-bold md:w-32 md:h-4/5">
          bog'lanish
        </button>
      </div>
      {/* Toggle button */}
      <button
        onClick={toggleMenu}
        className="invisible hidden text-black p-0 w-20 h-20 sm:visible sm:block xs:visible xs:block sm:focus:outline-none   absolute right-0 top-0 sm:top-[-8px] xs:top-[-8px] "
      >
        {isOpen ? (
          <Image src="/cancel.svg" alt="cancel" width="18" height="18" />
        ) : (
          <Image src="/menu.svg" alt="menu-bar" width="20" height="20" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
