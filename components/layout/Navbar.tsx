import Link from "next/link";
import React, { useContext, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { DarkThemeContext } from "../Layout";

const items = [
  {
    label: "Home",
    href: "/",
    icon: null,
  },
  {
    label: "About",
    href: "/about",
    icon: null,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: null,
  },
  {
    label: "GitHub",
    href: "https://github.com/dominik224",
    target: "_blank",
    icon: AiFillGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dominik-prz/",
    target: "_blank",
    icon: AiFillLinkedin,
  },
];

const Navbar = () => {
  const { darkTheme, toggleDarkTheme } = useContext(DarkThemeContext);
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const animation = "ease-in-out duration-300 ";
  const darkClass = "bg-dark text-light " + animation;
  const lightClass = "bg-light text-dark " + animation;
  const theme = darkTheme ? darkClass : lightClass;

  return (
    <>
      <header
        className={`flex w-full sticky top-0 z-50 h-16 font-bold shadow-sm shadow-gray-600 ${theme}`}
      >
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <Link
            className="uppercase cursor-pointer text-md md:text-lg lg:pl-20 pl-5"
            href="/"
          >
            Dominik Przychodni
            <span className="text-gray-400 opacity-75">©2024</span>
          </Link>

          {/* Phone screen menu */}
          <div className="sm:hidden mr-5 cursor-pointer">
            <RxHamburgerMenu onClick={() => toggleMenu()} size={40} />
          </div>

          {/* PC Screen menu*/}
          <div className="hidden sm:flex justify-between lg:pr-20 pr-5">
            {items.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.href}
                  target={item?.target}
                  className={`uppercase text-lg rounded-lg bg-opacity-0 hover:bg-opacity-10 py-2 px-2 md:px-3 ${
                    darkTheme ? "bg-light" : "bg-dark"
                  }`}
                >
                  {item.icon ? <item.icon size={26} /> : item.label}
                </Link>
              );
            })}
            <div
              onClick={() => toggleDarkTheme()}
              className={`flex items-center rounded-xl h-5 w-10 my-auto ml-3 cursor-pointer ease-in-out duration-300 ${
                darkTheme ? "bg-light justify-start" : " bg-dark justify-end"
              }`}
            >
              <div
                className={`h-4 w-4 rounded-2xl mx-1 ${
                  darkTheme ? "bg-dark" : "bg-light"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </header>
      {/* Phone screen select tab */}
      {menuOpen && (
        <div
          className={`w-full fixed top-16 z-50 h-fit flex flex-col gap-2 font-bold text-2xl bg-inherit uppercase ${theme}`}
        >
          {items.map((item, idx) => {
            return (
              <Link
                className="flex p-2 pr-5 shadow-sm shadow-gray-600 justify-end"
                href={item.href}
                key={idx}
                onClick={() => toggleMenu()}
              >
                {item.icon ? <item.icon size={26} /> : item.label}
              </Link>
            );
          })}
          <div
            onClick={() => {
              toggleDarkTheme();
              toggleMenu();
            }}
            className="flex p-2 pr-5 shadow-sm shadow-gray-600 justify-end"
          >
            <span className="normal-case">
              {darkTheme ? "setTheme('light')" : "setTheme('dark')"}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
