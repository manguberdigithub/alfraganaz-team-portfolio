"use client"

import React from "react";
import Image from "next/image";

interface ProjectProps {
	data: {
		id: number,
		to: string,
		src: string,
		title: string,
		text: string,
		tags: string[]
	};
	index: number;
}

const Project: React.FC<ProjectProps> = ({data, index}) => {
  const isRew = index % 2 == 0;
  return (
      <div className="w-full">
	<a href={data.to} className={`flex flex-col items-center w-full md:max-h-[300px] lg:max-h-[500px] bg-white ${isRew ? "md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse" : "md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"} hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
		<Image src={data.src} width={500} height={400} alt="" className="object-cover w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2" />
    		<div className="flex flex-col justify-between p-10 md:py-3 leading-normal">
        		<div className="relative">
				<h5 className="relative z-[1] text-lg font-bold text-black pl-6">{data.title}</h5>
				<Image src="/projects/h.png" width={100} height={10} alt="" className="absolute bottom-1 left-0 z-0" />
			</div>
			<p className="text-sm tracking-wide leading-6 my-4">{data.text}</p>
			<div className="flex flex-row justify-between mt-6">
				{
					data.tags && data.tags.map((tag, index) => (
						<span key={index} className="relative text-xs font-bold text-black "><span className="absolute -top-5 text-xs font-normal">{`0${index + 1}`}</span>{tag}</span>
					))
				}
			</div>
    		</div>
	</a>
      </div>
  );
};

export default Project;
