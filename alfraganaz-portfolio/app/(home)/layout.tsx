import React from "react";
import { Navbar } from "@/components";
import { ChildProps } from "@/types";

const HomeLayout: React.FC<ChildProps> = ({ children }) => {
    return (
      <div className="h-full">
        <Navbar />
        <main>
            {children}
        </main>
      </div>
    );
}
  
export default HomeLayout;