import Link from "next/link";
import React, { useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { DarkThemeContext } from "@/components/Layout";

const colors = {
  purple: "#9580FF",
  green: "#8AFF80",
  pink: "#FF80BF",
  yellow: "#FFFF80",
  orange: "#FF9580",
  blue: "#80FFEA",
};

const blueText = "drop-shadow-md text-lblue dark:text-dblue";
const yellowText = "drop-shadow-md text-lyellow dark:text-dyellow";
const greenText = "drop-shadow-md text-lgreen dark:text-dgreen";
const purpleText = "drop-shadow-md text-lpurple dark:text-dpurple";
const pinkText = "drop-shadow-md text-lpink dark:text-dpink";
const orangeText = "drop-shadow-md text-lorange dark:text-dorange";

const skillCardStyle =
  "flex flex-col gap-3 bg-opacity-70 hover:bg-opacity-[85%] rounded-lg w-full pb-4 text-center pt-4 bg-gradient-to-b";

const chapters = [
  {
    heading: "Introduction",
    content: (
      <>
        <p className="text-lg md:text-xl">
        <span className={pinkText}>Hello</span>, my name is <span className={greenText}>Dominik Przychodni</span>. I hold a Master&apos;s degree in Electronic and Computer Engineering and have several years of professional experience as a <span className={orangeText}>Software Engineer</span>. My career began with various freelance projects, both in-person and online. During my university studies, I completed three internships at <span className={blueText}>Intel</span>, where I continued to work full-time post-graduation. Most recently, I have been employed as a backend engineer in <span className={yellowText}>Toronto</span>. Currently, I am back in Ireland and actively seeking new opportunities.</p>
      </>
    ),
  },
  {
    heading: "Education",
    content: (
      <>
        <p className="text-xl md:text-2xl">
          <span className={greenText}>University </span>of Limerick
        </p>
        <p className="md:text-xl text-lg">
          <span className={pinkText}>Master of Engineering </span>in Electronic
          and Computer Engineering
        </p>
        <p className="text-md">Graduated With First Class Honours, 2022</p>
      </>
    ),
  },
  {
    heading: "Experience",
    content: (
      <>
        <p className="text-xl md:text-2xl">Software Engineer</p>
        <p className="text-kg md:text-xl pb-1">
          <span className={blueText}>iManage</span>, Toronto, Canada, 2023 - 2024
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
            <li>Engineered backend solutions for the <span className={blueText}>Closing Folders</span> application using the <span className={greenText}>Django Rest Framework</span></li>
            <li>Designed and delivered new features with <span className={purpleText}>zero-downtime</span> trunk-based deployments</li>
          <li>
            <span className={yellowText}>
              Python, Django, DRF, Postgresql, AWS
            </span>
            </li>
            </ul>
        <br/>
        <p className="text-xl md:text-2xl">Software Engineer</p>
        <p className="text-kg md:text-xl pb-1">
          <span className={blueText}>Intel</span>, Ireland, 2022 - 2023
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
          <li>
            <span className={purpleText}>Developed</span> the{" "}
            <span className={blueText}>vCMTS</span>, an application used by
            international ISPs powering the cable network
            <br />
            <Link
              className="underline italic bg-white bg-opacity-0 hover:bg-opacity-10 rounded-md p-1"
              href="https://www.intel.com/content/www/us/en/developer/topic-technology/open/vcmts-reference-dataplane/overview.html"
            >
              {"Read more here! ->"}
            </Link>
          </li>
          <li>
            <span className={greenText}>Optimized</span> CPU power draw by 25%
            by utilizing CPU C-state instructions and manipulating P-states
          </li>
          <li>
            Co-authored a power optimization guide for the{" "}
            <span className={blueText}>vCMTS</span> <br />
            <Link
              className="underline italic bg-white bg-opacity-0 hover:bg-opacity-10 rounded-md p-1"
              href={
                "https://www.intel.com/content/www/us/en/content-details/778903/guidelines-for-optimizing-power-consumption-of-vcmts-deployments-on-intel-xeon-scalable-processors.html"
              }
            >
              {"Check it out! ->"}
            </Link>
          </li>
          <li>
            Created a demonstration shown at{" "}
            <span className={orangeText}>AngaCom 2023</span> using Python,
            Collectd, Prometheus and Grafana
          </li>
          <li>
            Designed a <span className={pinkText}>REST API</span> for
            communication between various system processes
          </li>
          <li>
            <span className={yellowText}>
              Python, C, Bash, Linux, Docker, Kubernetes
            </span>
          </li>
        </ul>
        <br />
        <p className="text-xl md:text-2xl mb-1 mt-4">Teaching Assistant</p>
        <p className="text-kg md:text-xl pb-1">
          <span className="text-lblue dark:text-dblue">
            University of Limerick
          </span>
          , Ireland, 2021
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
          <li>
            Part of the Teaching staff for the{" "}
            <span className={greenText}>Digital</span> Systems class
          </li>
          <li>
            Taught students how to develop, test, and validate{" "}
            <span className={yellowText}>Verilog</span> code during labs
          </li>
        </ul>
        <br />
        <p className="text-xl md:text-2xl mb-1 mt-4">
          Software Engineering Internships
        </p>
        <p className="text-kg md:text-xl pb-1">
          <span className={blueText}>Intel</span>, Ireland, 2019 - 2021
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
          <li>
            <span className={purpleText}>Developing</span> server application
            connecting end-users to the
            <span className={pinkText}> 5G</span> network
          </li>
          <li>
            <span className={greenText}>Developed</span> and{" "}
            <span className={blueText}>deployed</span> large-scale packet
            generation system for <span className={yellowText}>testing</span>{" "}
            and <span className={yellowText}>demonstration</span>
          </li>
          <li>
            <span className={greenText}>Led</span> the winning teams in
            2020-2021 in the annual Intel{" "}
            <span className={purpleText}>STEM</span> Challenge
          </li>
          <li>
            <span className={yellowText}>
              Python, C, JavaScript, Linux, Bash
            </span>
          </li>
        </ul>
        <br />
        <p className="text-xl md:text-2xl mb-1 mt-4">
          Full Stack Software Engineer
        </p>
        <p className="text-kg md:text-xl pb-1">
          <span className={blueText}>jumpAgrade</span>, Ireland, 2018 - 2019
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
          <li>
            <span className={greenText}>Designing</span> and{" "}
            <span className={pinkText}>Developing</span> web application used by
            the start-up in its early stages
          </li>
          <li>
            <span className={yellowText}>
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
      <div className="flex flex-row md:gap-5 gap-1 row-span-4">
        <div className={`${skillCardStyle} bg-dpink`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Programming "}</span>
            👨‍💻
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>Python</li>
            <li>Golang</li>
            <li>JavaScript</li>
            <li>C</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dblue`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Backend "}</span>📡
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>Django</li>
            <li>Postgresql</li>
            <li>Flask</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dgreen`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Frontend "}</span>👨‍🎨
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
          <li>HTML5</li>
          <li>React.js</li>
          <li>Tailwind</li>
          <li>Grafana</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dpurple`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Other "}</span>🧰
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>AWS</li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const About = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  const theme = darkTheme ? "dark text-light" : "text-dark";

  return (
    <div
      className={`w-full flex flex-row row-span-3 justify-start md:justify-center min-h-screen h-full ${theme}`}
    >
      <div className="hidden lg:flex flex-col justify-start items-start text-xl">
        <ul className="fixed left-[10px] lg:left-[5rem] top-[13.4rem]">
          <li className="text-gray-400 hover:text-gray-200">
            <a
              className={`cursor-pointer ${
                darkTheme
                  ? "text-gray-400 hover:text-light"
                  : "text-dark hover:text-gray-500"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <IoIosArrowUp size={"1.5rem"} fontStyle={"bold"} />
            </a>
          </li>
          {chapters.map((chapter, idx) => {
            return (
              <li
                key={idx}
                className={`cursor-pointer ${
                  darkTheme
                    ? "text-gray-400 hover:text-light"
                    : "text-dark hover:text-gray-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  let hero = document.getElementById(chapter.heading);
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {chapter.heading}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4 md:w-[90%] lg:w-[60%] h-full">
        <div className="px-2">
          <div className="flex flex-row row-span-2 justify-between mb-[-60px]">
            <h1 className="text-4xl md:text-6xl mt-4">About me:</h1>
          </div>
          <br />
          {chapters.map((chapter, idx) => {
            return (
              <div
                key={idx}
                id={chapter.heading}
                className="pt-[4rem] pb-[-2rem]"
              >
                <h2 className="pb-2 text-gray-500 dark:text-gray-400 text-2xl md:text-3xl">
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
                <div className="text-lg">{chapter?.content}</div>
              </div>
            );
          })}
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
