"use client"

import React from "react";
import Image from "next/image";

interface ServiceProps {
	data: {
		id: number,
		src: string,
		title: string,
		text: string,
		tags: string[]
		tex: {
			title: string,
			tags: Object[]
		}
	};
	index: string;
}

const Service: React.FC<ServiceProps> = ({data, index}) => {
  const isRew = index % 2 != 0;
  return (
      <div className="w-full bg-zinc-100">
	<div className={`flex flex-col items-center w-full md:max-h-[600px] lg:max-h-[500px] ${isRew ? "md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse bg-white" : "md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"} rounded-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
		<Image src={data.src} width={500} height={400} alt="" className="object-cover w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2" />
    		<div className="flex flex-col justify-between p-5 md:py-5 leading-normal">
        		<div className="relative">
				<h5 className="relative z-[1] text-lg font-bold text-black">{data.title}</h5>
			</div>
			<p className="text-sm tracking-wide leading-6 my-4">{data.text}</p>
			<div className="flex flex-row justify-start gap-5 mt-6">
				{
					data.tags && data.tags.map((tag, index) => (
						<span key={index} className="relative text-xs font-bold text-black "><span className="absolute -top-5 text-xs font-normal">{`0${index + 1}`}</span>{tag}</span>
					))
				}
			</div>
			<div className="flex flex-col mt-6">
				<span className="relative z-[1] text-md font-bold text-black">{data.tex.title}</span>
				<div className="flex flex-row gap-10 mt-4">	
					{
						data.tex?.texs && data.tex.texs.map((tag, index) => (
							<div className="flex flex-col justify-between items-center gap-2">
								<Image src={tag.src} width={40} height={40} alt={tag.title} />
								<span key={index} className="relative text-xs font-bold text-black ">{tag.title}</span>
							</div>
						))
					}
				</div>
			</div>
    		</div>
	</div>
      </div>
  );
};

export default Service;
