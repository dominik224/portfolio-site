import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
  return (
    <header className="flex sticky top-0 z-50 flex-row gap-10 items-center justify-end font-[BlenderPro] font-bold text-white w-full h-16 bg-[#0d0e11]">
      <div className="invisible w-40"></div>
      <div className="cursor-pointer w-full uppercase">
        <a href="/">
          Dominik Przychodni
          <span className="text-gray-400 text-lg opacity-75">©2023</span>
        </a>
      </div>
      <div className="w-full"></div>
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-row h-12 p-1 justify-center items-center rounded-lg bg-white bg-opacity-0 hover:bg-opacity-10"
          >
            <Link
              href={item.href}
              target={item?.target}
              className="uppercase text-lg opacity-100 p-2"
            >
              {item.icon ? <item.icon size={26} /> : item.label}
            </Link>
          </div>
        );
      })}
      <div className="invisible w-20"></div>
    </header>
  );
};

export default Navbar;
