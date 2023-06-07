import React from "react";
import Navbar from "./layout/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Navbar />
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
