import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import { json } from "stream/consumers";

interface LayoutProps {
  children: React.ReactNode;
}

export const DarkThemeContext = createContext({
  darkTheme: true,
  toggleDarkTheme: () => {},
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const toggleDarkTheme = () => {
    window.localStorage.setItem('darkTheme', JSON.stringify(!darkTheme));
    setDarkTheme(!darkTheme);
  };

  useLayoutEffect(() => {
    let darkTheme = JSON.parse(window.localStorage.getItem('darkTheme') ?? 'true');
    setDarkTheme(darkTheme);
  }, []);

  return (
    <>
      <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
        <div
          className={`flex flex-col h-max ease-in-out duration-300 ${
            darkTheme ? "bg-dark" : "bg-light"
          }`}
        >
          <Navbar />
          <div className="flex container h-[100%] justify-center mx-auto xl:px-30 max-w-8xl">
            {children}
          </div>
        </div>
      </DarkThemeContext.Provider>
    </>
  );
};

export default Layout;
