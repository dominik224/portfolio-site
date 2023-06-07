import Link from "next/link";
import img from "../public/preview.jpg";

const animatedBg = `.animatedBg {
      background: linear-gradient(90deg, #24fcf9, #884176, #1111bb);
      background-size: 300% 300%;
      animation: gradient 6s alternate infinite;
    }
    @keyframes gradient {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 100%;
      }
    }`;

export default function Home() {
  return (
    <div className="h-full w-full">
      <style>{animatedBg}</style>
      <div className="animatedBg flex h-full align-center items-center rounded-md bg-white">
        <div className="items-center  w-full m-5 text-3xl font-bold z-30">
          <span>{"Hi 🤗, I'm "}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 from-10% via-sky-600 via-50% to-emerald-600 to-90%">
            {"Dominik! "}
          </span>
          <br />
          <span>{"And I am a "}</span>
          <span className="text-[#ffd700]">{"✨Software Engineer✨"}</span>
          <br />
          <br />
          <Link className="" href={"/about"}>
            {"About me ->"}
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(${img})`, backgroundSize: "contain" }}
          className=" w-full h-full"
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
