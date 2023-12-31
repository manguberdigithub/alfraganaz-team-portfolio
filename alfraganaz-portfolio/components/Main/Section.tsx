import React from "react";
import { processGroup } from "@/constants";
import Image from "next/image";

interface SectionProps {
	title: string;
	disc: string;
	subTitle: string;
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({title, disc, subTitle, children }) => {
  return (
    <section className="w-full h-auto my-6">
      <div className="px-36 3xl:px-[240px] md:px-[100px] sm:px-[50px] xs:pl-[20px] xs:pr-[0px] h-20 xl:h-16 lg:h-16 md:h-16 sm:h-14 xs:h-14 mb-4 flex flex-col justify-between font-montserrat">
        <span className="w-[72px] h-[19px] text-base text-medium xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs">
          {disc}
        </span>
        <h2 className="text-5xl text-bold text-black xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl">
          {title}
        </h2>
	<span className="w-[450px] text-base text-medium mt-1 xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs">
          {subTitle}
        </span>
      </div>
      {children}
    </section>
  );
};

export default Section;