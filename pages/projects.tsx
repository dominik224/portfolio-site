import React, { ReactElement, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { DarkThemeContext } from "@/components/Layout";

interface projectInfo {
  title: String;
  body: String;
  image: String;
  link?: String;
  icons: ReactElement[];
}

const borderColors = [
  "border-lpink dark:border-dpink",
  "border-lgreen dark:border-dgreen",
  "border-dpurple",
  "border-dblue",
  "border-dyellow",
  "border-dred",
];

const iconStyle = "hover:scale-105";

const projectList: projectInfo[] = [
  {
    title: "Dominik.ie",
    body: "The site you are currently on! This site was created with Next.js + TailwindCSS. The color theme was inspired by the dracula coding theme and uses the JetBrains Mono font. I created it to give a brief summary about me and to showcase some of the personal projects I've worked on. It is stil a work in progress.",
    image: "/SiteThumbnail2.PNG",
    link: "https://github.com/dominik224/portfolio-site",
    icons: [
      <SiNextdotjs
        key={0}
        title="Next.js"
        size={40}
        color={"white"}
        className={iconStyle}
      />,
      <SiReact
        key={1}
        title="React.js"
        size={40}
        color="#61dbfb"
        className={iconStyle}
      />,
      <SiTypescript
        key={2}
        title="TypeScript"
        size={40}
        color="#2d79c7"
        className={iconStyle}
      />,
      <SiTailwindcss
        key={3}
        title="TailwindCSS"
        size={40}
        color="#07b6d5"
        className={iconStyle}
      />,
    ],
  },
  {
    title: "Secure chatroom",
    body: "A secure chatroom using a custom protocol made for a university assignment. Written in Python and uses sockets for communication between the server and clients. The server acts as a trusted authority and clients are endpoints which communicate using confidential key.",
    image: "./secure_chatroom-svg2.svg",
    link: "https://github.com/dominik224/secure-chatroom/",
    icons: [
      <Image
        key={0}
        className={iconStyle}
        title={"Python 3"}
        alt="Python logo"
        src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
        width={40}
        height={40}
      />,
    ],
  },
];

const ProjectCard = (props: { content: projectInfo; index: number }) => {
  const { darkTheme } = useContext(DarkThemeContext);

  const mainStyle = `flex flex-col sm:w-[90%] md:w-[80%] lg:w-[55%] rounded-[19px] border-2 px-8 py-6 ease-in-out duration-300 ${
    darkTheme ? "dark" : ""
  } ${borderColors[props.index % borderColors.length]}`;

  return (
    <div className={mainStyle}>
      <h1 className="pb-2 text-2xl dark:text-light text-dark">
        {props.content.title}
        <br />
        <hr className="pb-2" />
      </h1>
      <div className="flex-col md:grid gap-3 grid-cols-12 grid-rows-10 dark:text-light text-dark">
        <div className="row-span-7 col-span-6 ">
          <p className="text-[1rem]">{props.content.body}</p>
        </div>
        <div className="col-span-1"></div>
        <div className="flex justify-center items-center col-span-5">
          <Image
            src={`${props.content.image}`}
            className="shadow-[0px_0px_10px_-4px_rgba(255,255,255,1)] rounded-sm mt-4 md:mt-0"
            alt="Project image"
            width={310}
            height={210}
          />
        </div>
        <Link
          href={`${props.content.link}`}
          target="_blank"
          className="flex items-center justify-center md:justify-start md:items-end md:text-end align-bottom col-span-7"
        >
          {props.content.link && (
            <span className="underline md:no-underline text-2xl px-2 pt-4 pb-6 md:p-2 hover:underline hover:cursor-pointer hover:scale-105">
              {"GitHub ->"}
            </span>
          )}
        </Link>
        <div className="flex items-center justify-center col-span-5">
          <div className="flex flex-row gap-4 scale-110 md:scale-100">
            {props.content.icons.map((icon, idx) => {
              return <div key={idx}>{icon}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = () => {
  return (
    <div className="flex flex-col gap-20 items-center w-screen min-h-screen py-16">
      {projectList.map((p, idx) => (
        <ProjectCard key={idx} content={p} index={idx} />
      ))}
      <h1 className="">More coming soon...</h1>
    </div>
  );
};

export default projects;
