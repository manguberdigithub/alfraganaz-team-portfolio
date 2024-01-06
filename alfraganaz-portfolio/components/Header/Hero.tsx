"use client";
import React from "react";
import { heroGroup } from "@/constants";
const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-auto relative  pt-36 pb-16 pl-36 pr-28 bg-[url('/header-bg.png')] bg-cover bg-center bg-no-repeat md:pr-12 md:pl-24 sm:pl-10 xs:pl-6 sm:pr-0 xs:pr-0 after:w-100 after:absolute after:inset-0 after:bg-gradient-to-r after:from-gradient after:to-transparent
    "
    >
      <div className="w-full h-125 flex flex-col justify-between z-40">
        {/* Hero Content */}
        <div className="w-full h-64 z-30  flex flex-col justify-between 3xl:pl-24 3xl:w-4/5 2xl:w-5/6 2xl:pl-16 xl:w-full lg:h-48 sm:w-full md:h-60 xs:h-52">
          {/* Hero title */}
          <h1 className="w-full h-24 z-10  text-white font-montserrat font-extrabold text-64 leading-tight xl:h-20 xl:w-5/6 xl:text-6xl lg:w-full lg:text-5xl  md:text-5xl sm:text-5xl sm:w-4/5 xs:text-4xl">
            Biznesingizni rivojlantirishda biz bilan birga!
          </h1>
          {/* Hero paragraph */}
          <p className="w-5/6 h-20 z-10 text-light-grey font-montserrat font-medium text-4xl xl:h-16 lg:text-3xl md:w-full md:text-3xl sm:text-3xl xs:text-xl xs:w-full">
            Bizning xizmatlarimiz bilan tanishing va biznesingizni yanada oson
            boshqaring
          </p>
        </div>
        {/* Hero Groups */}
        <div className="w-full h-28 flex justify-between items-center z-40 xl:h-20 lg:h-16  md:h-14 sm:h-10 xs:h-10">
          {heroGroup.map((group) => (
            <div
              key={group.id}
              className="w-full h-5/6 flex flex-col items-center  lg:h-full xs:w-20 lg:first:items-start"
            >
              <h2 className="w-36 h-24 font-montserrat  text-center text-7xl font-bold text-white xl:text-6xl lg:w-28 lg:text-5xl md:text-5xl md:w-20 sm:text-5xl xs:text-4xl xs:w-16  lg:h-full">
                {group.title}
              </h2>
              <span className="max-w-64 h-8 font-montserrat text-xl  font-medium text-white lg:text-lg md:text-sm sm:text-xs xs:text-xs  lg:h-full">
                {group.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
