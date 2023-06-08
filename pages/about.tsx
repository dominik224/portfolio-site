import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

const colors = {
  purple: "#9580FF",
  green: "#8AFF80",
  pink: "#FF80BF",
  yellow: "#FFFF80",
  orange: "#FF9580",
  blue: "#80FFEA",
};

const skillCardStyle =
  "flex flex-col gap-3 bg-opacity-70 hover:bg-opacity-90 rounded-lg w-full pb-4 text-center pt-4";

const chapters = [
  {
    heading: "Introduction",
    content: (
      <>
        <p className="text-xl">
          <span className="text-dpink">Hey</span>, my name is{" "}
          <span className="text-dpurple">Dominik </span> Przychodni. I am a
          <span className="text-dgreen"> Software </span> Engineer with a{" "}
          <span className="text-dorange">Master's </span>degree in Electronic
          and Computer Engineering, I have been working professionally for a few
          years now. I have started with various freelance projects both
          in-person and online through sites such as fiverr. I have completed 3
          internships with <span className="text-dblue">Intel </span>
          throughout my education and since my graduation in 2022 I have been
          working there full-time.
        </p>
      </>
    ),
  },
  {
    heading: "Education",
    content: (
      <>
        <p className="text-2xl pb-1">
          <span className="text-dgreen">University </span>of Limerick
        </p>
        <p className="text-xl">
          <span className="text-dpink">Master of Engineering </span>in
          Electronic and Computer Engineering
        </p>
        <p className="text-md">Graduated With First Class Honours, 2022</p>
      </>
    ),
  },
  {
    heading: "Experience",
    content: (
      <>
        <p className="text-2xl mb-1 mt-4">Software Engineer</p>
        <p className="text-kg pb-1">
          <span className="text-dblue">Intel</span>, Ireland, 2022 - Current
        </p>
        <ul className="list-disc text-[16px] pl-8">
          <li>
            <span className="text-dpurple">Developed</span> server applications
            used by international telecommunication providers.
          </li>
          <li>
            <span className="text-dgreen">Optimized</span> CPU power draw by
            25%.
          </li>
          <li>
            Created a demonstration shown at{" "}
            <span className="text-dorange">AngaCom 2023</span>
          </li>
          <li>
            Designed <span className="text-dpink">APIs</span> for communication
            between various system processes.
          </li>
          <li>
            <span className="text-dyellow">
              Python, C, Go, Bash, Linux, Docker, Kubernetes
            </span>
          </li>
        </ul>
        <br />
        <p className="text-2xl mb-1 mt-4">Software Engineering Internships</p>
        <p className="text-xl pb-1">
          <span className="text-dblue">Intel</span>, Ireland, 2019 - 2022
        </p>
        <ul className="list-disc text-[16px] pl-8">
          <li>
            <span className="text-dpurple">Developing</span> server application
            connecting end-users to the
            <span className="text-dpink"> 5G</span> network.
          </li>
          <li>
            <span className="text-dgreen">Developed</span> and{" "}
            <span className="text-dblue">deployed</span> large-scale packet
            generation system for <span className="text-dyellow">testing</span>{" "}
            and <span className="text-dyellow">demonstration</span>.
          </li>
          <li>
            <span className="text-dgreen">Led</span> the winning teams in
            2020-2021 in the annual Intel{" "}
            <span className="text-dpurple">STEM</span> Challenge.
          </li>
          <li>
            <span className="text-dyellow">
              Python, C, JavaScript, Linux, Bash
            </span>
          </li>
        </ul>
        <br />
        <p className="text-2xl mb-1 mt-4">Full Stack Software Engineer</p>
        <p className="text-xl pb-1">
          <span className="text-dblue">jumpAgrade</span>, Ireland, 2018 - 2019
        </p>
        <ul className="list-disc text-[16px] pl-8">
          <li>
            <span className="text-dgreen">Designing</span> and{" "}
            <span className="text-dpink">Developing</span> web application used
            by the start-up in its early stages.
          </li>
          <li>
            <span className="text-dyellow">
              JavaScript, Python, Node.js, CSS, HTML
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Skills",
    content: (
      <div className="flex flex-row gap-5 row-span-3">
        <div className={`${skillCardStyle} bg-dpink`}>
          <span className="font-bold text-xl underline">Programming 👨‍💻</span>
          <ul className="text-xl">
            <li>C</li>
            <li>Python</li>
            <li>Go</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dgreen`}>
          <span className="font-bold text-xl underline">Backend 📡</span>
          <ul className="text-xl">
            <li>Node.js</li>
            <li>Gin</li>
            <li>SQL</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dpurple`}>
          <span className="font-bold text-xl underline">Frontend 👨‍🎨</span>
          <ul className="text-xl">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Grafana</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dyellow`}>
          <span className="font-bold text-xl underline">Other 🧰</span>
          <ul className="text-xl">
            <li>Git</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>Jira</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const about = () => {
  return (
    <div className="flex flex-row row-span-3 justify-center text-white min-h-screen h-full">
      <div className="flex flex-col justify-start items-start text-xl w-[20%]">
        <div className="h-40 scroll-smooth"></div>
        <ul className="fixed top-[13.4rem]">
          <li className="text-gray-400 hover:text-gray-200">
            <a
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <AiOutlineArrowUp size={"1.5rem"} fontStyle={"bold"} />
            </a>
          </li>
          {chapters.map((chapter, idx) => {
            return (
              <li key={idx} className="text-gray-400 hover:text-gray-200">
                <a
                  href={`#${chapter.heading}`}
                  onClick={(e) => {
                    e.preventDefault();
                    let hero = document.getElementById(chapter.heading);
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {chapter.heading}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[60%] h-full">
        <div className="px-6">
          <h1 className="text-6xl mt-4">About me:</h1>
          <br />
          {chapters.map((chapter, idx) => {
            return (
              <div
                key={idx}
                id={chapter.heading}
                className="pt-[4rem] pb-[-2rem]"
              >
                <h2 className="pb-2 text-gray-400 text-3xl">
                  <a
                    href={`#${chapter.heading}`}
                    onClick={(e) => {
                      e.preventDefault();
                      let hero = document.getElementById(chapter.heading);
                      hero && hero.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {chapter.heading}
                  </a>
                </h2>
                <div className="text-gray-100 text-lg">{chapter?.content}</div>
              </div>
            );
          })}
          <br />
        </div>
      </div>
      <div className="w-[20%] h-10 pb-5"></div>
    </div>
  );
};

export default about;
