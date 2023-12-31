"use client"

import React from "react";
import {Project} from "@/components";
import {projectsList} from "@/constants";

const Projects: React.FC = () => {
  return (
      <div className="w-full h-auto py-[30px] px-[160px] flex flex-col gap-8 3xl:px-[240px] md:px-[100px] sm:px-[50px] xs:px-[35px]">
        {
		projectsList && projectsList.map((project, index) => (
			<Project key={index} data = {project} index = {index}/>
		))
	}
      </div>
  );
};

export default Projects;
