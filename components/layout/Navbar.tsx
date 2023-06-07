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
    label: "GitHub",
    href: "https://github.com/dominik224",
    icon: AiFillGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dominik-prz/",
    icon: AiFillLinkedin,
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row gap-10 items-center justify-end w-full h-16 bg-black">
      <div className="invisible w-40"></div>
      {items.map((item) => {
        return (
          <div className="flex flex-row h-12 p-1 justify-center items-center rounded-lg bg-white bg-opacity-0 hover:bg-opacity-10">
            <Link
              href={item.href}
              className="uppercase font-bold text-lg text-white opacity-100 p-2 font-[BlenderPro]"
            >
              {item.icon ? <item.icon size={26} /> : item.label}
            </Link>
          </div>
        );
      })}
      <div className="invisible w-20"></div>;
    </div>
  );
};

export default Navbar;
