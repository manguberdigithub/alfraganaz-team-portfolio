"use client"

import React from "react";
import {Card} from "@/components";
import {teamList} from "@/constants";

const Team: React.FC = () => {
  return (
      <div className="w-full h-auto mt-20 py-[30px] px-[160px] flex flex-col gap-8 3xl:px-[240px] md:px-[100px] sm:px-[50px] xs:px-[35px]">
        <div className="grid gap-8 gap-y-20 justify-center lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
		{
			teamList && teamList.map((data, index) => (
				<Card data = {data} key={index} />
			))
		}
	</div>
      </div>
  );
};

export default Team;
