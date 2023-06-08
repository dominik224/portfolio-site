import Link from "next/link";
import img from "../public/preview.jpg";
import Typed from "react-typed";

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

export default function Home() {
  return (
    <div className="h-[calc(100vh-64px)] w-[72rem]">
      <style>{animatedBg}</style>
      <div className="animatedBg flex relative h-full align-center items-center rounded-md bg-white">
        <div className="items-center absolute w-full m-5 text-3xl font-bold text-white z-30">
          <span>{"Hi 🤗, I'm "}</span>
          <span className="text-dblue">{"Dominik! "}</span>
          <br />
          <span>{"And I am a "}</span>
          <span className="text-dyellow">
            {"✨Software "}{" "}
            <Typed
              strings={["Engineer", "Developer"]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
            />
            {"✨"}
          </span>
          <br />
          <br />
          <Link className="text-dgreen" href={"/about"}>
            {"About me ->"}
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(${img})`, backgroundSize: "contain" }}
          className="absolute w-full h-full"
        ></div>
        {/*
        
        <style>
          {`
          .bgText {
            color: white;
            background-clip: text
            -webkit-text-fill-color: white;
            -webkit-background-clip: text;
          }
          `}
        </style>
        <div className="animatedBg absolute bgText filter invert text-[5.9px] font-mono leading-[5.9px] font-extrabold align-bottom overflow-hidden z-0">
          {<Portrait />}
        </div>
        */}
      </div>
    </div>
  );
}
