import Link from "next/link";
import Typed from "react-typed";
import { BG } from "@/components/aboutBackground";
import { useContext } from "react";
import { DarkThemeContext } from "@/components/Layout";

export default function Home() {
  const { darkTheme } = useContext(DarkThemeContext);

  const animation = "ease-in-out duration-300 ";
  const darkClass = "bg-dark text-white " + animation;
  const lightClass = "bg-light text-dark " + animation;
  const theme = darkTheme ? darkClass : lightClass;

  return (
    <div
      className={`flex h-[calc(100vh-64px)] w-screen items-center justify-center ${theme}`}
    >
      <div
        className={`flex w-[90%] h-[90%] relative align-center items-center rounded-lg overflow-hidden ${
          darkTheme
            ? "bg-light bg-opacity-5"
            : "text-black bg-dark bg-opacity-[80%]"
        }`}
      >
        <div className="w-full h-full flex absolute z-10 overflow-hidden">
          <BG />
        </div>
        {/* Typing effect */}
        <div className="items-center w-full m-5 md:ml-10 text-xl lg:text-3xl font-bold z-30 select-none">
          <span>
            {"Hi "}
            <div className="inline w-fit h-fit  hand">👋</div>
            {", I'm "}
          </span>
          <span className="text-dblue">{"Dominik! "}</span>
          <br />
          <span>{"And I am a "}</span>
          <span className="text-dyellow">
            {"Software  "}
            <br className="flex md:hidden" />
            <Typed
              strings={["Engineer.", "Developer."]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={3000}
              loop
            />
            {"👨‍💻"}
          </span>
          <br />
          <br />
          <Link className="text-dgreen" href={"/about"}>
            {"About me ->"}
          </Link>
        </div>
      </div>
    </div>
  );
}
