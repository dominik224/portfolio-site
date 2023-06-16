import Link from "next/link";
import Typed from "react-typed";
import { BG } from "@/components/aboutBackground";

const animatedBg = `.animatedBg {
      background: linear-gradient(90deg, #ffffff, #24fcf9, #884176, #1111bb, #000000);
      background-size: 300% 300%;
      animation: gradient 6s alternate infinite;
    }
    @keyframes gradient {
      0% {
        background-position: 30%;
      }
      100% {
        background-position: 70%;
      }
    }`;
//<div className="h-[calc(100vh-64px)] w-[72rem]"></div>
export default function Home() {
  return (
    <div className=" flex h-[calc(100vh-64px)] w-screen items-center justify-center">
      <style>{animatedBg}</style>
      <div className="flex w-[90%] h-[90%] relative align-center items-center rounded-lg bg-opacity-5 bg-gray-100 overflow-hidden">
        <div className="w-full h-full flex absolute z-10 overflow-hidden ">
          <BG />
        </div>
        {/* Typing effect */}
        <div className="items-center w-full m-5 md:ml-10 text-xl lg:text-3xl font-bold text-white z-30">
          <span>{"Hi 👋, I'm "}</span>
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
