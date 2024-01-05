"use client"

import React from "react";
import Image from "next/image";

interface CardProps {
	data: {
		id: number,
		fullName: string,
		title: string,
		src: string,
		social: {
			src: string,
			to: string,
		}[],
	}
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
      <div className="relative p-5 text-center text-gray-500 w-[300px] h-[318px] bg-white rounded shadow-lg shadow-gray-500/40 lg:w-[248px] xl:w-[240px] dark:text-gray-400">
              <Image src={`${data.src ? data.src : '/team/user.png'}`} alt={data.fullName} width={150} height={150} className="absolute -top-[60px] left-[50%] translate-x-[-50%] xl:w-[130px] xl:h-[130px] rounded-full" />
              <h3 className="mt-[100px] xl:mt-[80px] mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.fullName}
              </h3>
              <p>{data.title}</p>
	      <hr className="mt-12"/>
              <ul className="absolute p-5 bottom-0 left-0 w-full flex justify-center mt-10 space-x-6">
                  {
			data.social && data.social.map((link, index) =>(
				<li key={index}>
                     			 <a href={link.to} className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          			<Image src={link.src} width={20} height={20} className="rounded-full" alt=""/>
                      			</a>
                  		</li>
			))
		  }
              </ul>
          </div>
  );
};

export default Card;
