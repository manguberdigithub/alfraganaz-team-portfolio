"use client"

import React from "react";
import {Service} from "@/components";
import {servicesList} from "@/constants";

const Services: React.FC = () => {
  return (
      <div className="w-full h-auto py-[30px] px-[160px] flex flex-col gap-8 3xl:px-[240px] md:px-[100px] sm:px-[50px] xs:px-[35px]">
        {
          servicesList && servicesList.map((service, index) => (
            <Service key={index} data={service} index={index}/>
          ))
	      }
      </div>
  );
};

export default Services;
