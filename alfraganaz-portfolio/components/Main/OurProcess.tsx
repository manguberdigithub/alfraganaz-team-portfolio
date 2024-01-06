import React from "react";
import { processGroup } from "@/constants";
import Image from "next/image";

const OurProcess: React.FC = () => {
  return (
    <div className="w-full h-auto my-4">
      <div className="px-36 3xl:px-[240px] md:px-[100px] sm:px-[50px] xs:pl-[20px] xs:pr-[0px] h-20 xl:h-16 lg:h-16 md:h-16 sm:h-14 xs:h-14 mb-4 flex flex-col justify-between font-montserrat">
        <span className="w-[72px] h-[19px] text-base text-medium xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs">
          ISHLASH
        </span>
        <div className="text-5xl text-bold text-black xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl">
          JARAYONIMIZ
        </div>
      </div>
      <div className="w-full h-[752px] bg-black py-[75px] px-[160px]  flex justify-between 3xl:px-[240px] md:h-[650px] sm:h-[600px] md:px-[100px] sm:px-[50px] xs:px-[35px]">
        <div className="w-full grid grid-rows-2 grid-flow-col justify-between xs:grid-rows-3 xs:justify-center xs:gap-x-20 xs:gap-y-6">
          {processGroup.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center w-[230px] md:w-[200px]  h-[248px] md:h-[200px] sm:h-[200px]  sm:w-[180px] xs:w-[135px] xs:h-[180px] gap-4 "
            >
              <Image
                src={item.src}
                alt={item.text}
                width={110}
                height={110}
                className="md:w-[80px]  sm:w-[80px]  xs:w-[50px] "
              />
              <h5 className="text-light-grey text-2xl text-semibold w-[146px] h=[87px] text-center md:text-xl  sm:text-lg xs:text-lg">
                {item.text}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
