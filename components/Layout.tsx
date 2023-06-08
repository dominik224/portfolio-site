import React from "react";
import Navbar from "./layout/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-max bg-[#0d0e11]">
      <Navbar />
      <div className="flex container h-[100%] justify-center mx-auto xl:px-30 max-w-8xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
