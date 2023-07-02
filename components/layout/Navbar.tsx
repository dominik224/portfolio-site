import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

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

// bg-[#0d0e11]
//<header className="flex sticky top-0 z-50 font-[BlenderPro] font-bold text-white w-full h-16 bg-red-400">*/}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex w-full sticky top-0 z-50 h-16 bg-[#0d0e11] text-white font-bold shadow-sm shadow-gray-600">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <Link
            className="uppercase cursor-pointer text-md md:text-lg lg:pl-20 pl-5"
            href="/"
          >
            Dominik Przychodni
            <span className="text-gray-400 opacity-75">©2023</span>
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
                  className="uppercase text-lg rounded-lg bg-white bg-opacity-0 hover:bg-opacity-10 py-2 px-2 md:px-3"
                >
                  {item.icon ? <item.icon size={26} /> : item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="w-full fixed top-16 z-50 h-fit flex flex-col gap-2 font-bold text-2xl bg-inherit text-white uppercase">
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
        </div>
      )}
    </>
  );
};

export default Navbar;
