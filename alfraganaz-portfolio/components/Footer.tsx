"use client";

import React from "react";
import Image from "next/image";
import { footerGroup } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto pt-[76px] pb-[40px] pl-[300px] pr-[0px] bg-black 2xl:pl-[200px] xl:pl-[160px] xl:pt-[60px] lg:pl-[130px] lg:pt-[50px] md:pl-[100px] md:pt-[50px] sm:pl-[50px] sm:pt-[40px] sm:pb-[50px] xs:pl-[25px] xs:pt-[40px] xs:pb-[50px] xs:pr-[20px]">
      <div className="w-full h-[221px] grid grid-cols-4 xs:grid-cols-2 gap-x-6 xl:h-[180px] lg:h-[160px] md:h-[160px] sm:h-[150px] xs:h-[300px] gap-10">
        {footerGroup.map((item) => (
          <div key={item.id} className="w-[100%] flex flex-col justify-between">
            <div className="w-full h-auto flex justify-start">
              <button
                onClick={() => (window.location.href = item.href)}
                className="w-[80px] h-[80px] bg-light-grey flex justify-center items-center rounded-full xl:w-[70px] xl:h-[70px] lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] sm:w-[60px] sm:h-[60px] xs:w-[50px] xs:h-[50px]"
              >
                <Image
                  src={item.src}
                  alt={item.src}
                  width={29}
                  height={32}
                  className="xl:w-[25px] xl:h-[28px] lg:w-[22px] lg:h-[25px] md:w-[22px] md:h-[25px] sm:w-[22px] sm:h-[25px] xs:w-[20px] xs:h-[22px]"
                />
              </button>
            </div>
            <div className="h-[45px] flex flex-col justify-between">
              {item.span ? (
                <span className="text-light-grey text-[16px] leading-[125%] not-italic font-medium opacity-[.44] md:text-[14px] sm:text-[14px] xs:text-[14px]">
                  {item.span}
                </span>
              ) : (
                ""
              )}
              <p className="text-light-grey first:text-[14px] md:first:text-[12px] sm:first:text-[12px] xs:first:text-[12px] first:leading-[120%] first:mt-10 text-[16px] leading-[150%] not-italic font-medium md:text-[14px] sm:text-[12px] xs:text-[12px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
