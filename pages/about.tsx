import Link from "next/link";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const colors = {
  purple: "#9580FF",
  green: "#8AFF80",
  pink: "#FF80BF",
  yellow: "#FFFF80",
  orange: "#FF9580",
  blue: "#80FFEA",
};

const skillCardStyle =
  "flex flex-col gap-3 bg-opacity-70 hover:bg-opacity-[85%] rounded-lg w-full pb-4 text-center pt-4 bg-gradient-to-b";

const chapters = [
  {
    heading: "Introduction",
    content: (
      <>
        <p className="text-lg md:text-xl">
          <span className="text-dpink">Hey</span>, my name is{" "}
          <span className="text-dpurple">Dominik </span> Przychodni. I am a
          <span className="text-dgreen"> Software </span> Engineer with a{" "}
          <span className="text-dorange">Master&apos;s </span>degree in
          Electronic and Computer Engineering, I have been working
          professionally for a few years now. I have started with various
          freelance projects both in-person and online through sites such as
          fiverr. I have completed 3 internships with{" "}
          <span className="text-dblue">Intel </span>
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
        <p className="text-xl md:text-2xl pb-1">
          <span className="text-dgreen">University </span>of Limerick
        </p>
        <p className="md:text-xl text-lg">
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
        <p className="text-xl md:text-2xl mb-1 mt-4">Software Engineer</p>
        <p className="text-kg pb-1">
          <span className="text-dblue">Intel</span>, Ireland, 2022 - Current
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
          <li>
            <span className="text-dpurple">Developed</span> the{" "}
            <span className="text-dblue">vCMTS</span>, an application used by
            international ISPs powering the cable network.
            <br />
            <Link
              className="underline italic bg-white bg-opacity-0 hover:bg-opacity-10 rounded-md p-1"
              href="https://www.intel.com/content/www/us/en/developer/topic-technology/open/vcmts-reference-dataplane/overview.html"
            >
              {"Read more here! ->"}
            </Link>
          </li>
          <li>
            <span className="text-dgreen">Optimized</span> CPU power draw by 25%
            by utilizing CPU C-state instructions and manipulating P-states.
          </li>
          <li>
            Co-authored a power optimization guide for the{" "}
            <span className="text-dblue">vCMTS</span>. <br />
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
            <span className="text-dorange">AngaCom 2023</span> using Python,
            Collectd, Prometheus and Grafana.
          </li>
          <li>
            Designed a <span className="text-dpink">REST API</span> for
            communication between various system processes.
          </li>
          <li>
            <span className="text-dyellow">
              Python, C, Bash, Linux, Docker, Kubernetes
            </span>
          </li>
        </ul>
        <br />
        <p className="text-xl md:text-2xl mb-1 mt-4">
          Software Engineering Internships
        </p>
        <p className="text-lg md:text-xl pb-1">
          <span className="text-dblue">Intel</span>, Ireland, 2019 - 2022
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
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
        <p className="text-xl md:text-2xl mb-1 mt-4">
          Full Stack Software Engineer
        </p>
        <p className="text-xl pb-1">
          <span className="text-dblue">jumpAgrade</span>, Ireland, 2018 - 2019
        </p>
        <ul className="list-disc text-[14px] md:text-[16px] pl-8">
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
      <div className="flex flex-row md:gap-5 gap-1 row-span-4">
        <div className={`${skillCardStyle} bg-dpink`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Programming "}</span>
            👨‍💻
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>C</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dblue`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Backend "}</span>📡
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>Node.js</li>
            <li>Next.js</li>
            <li>SQL</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dgreen`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Frontend "}</span>👨‍🎨
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>React.js</li>
            <li>Tailwind</li>
            <li>Grafana</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className={`${skillCardStyle} bg-dpurple`}>
          <span className="font-bold text-[16px] md:text-xl">
            <span className="hidden md:block underline">{"Other "}</span>🧰
          </span>
          <ul className="text-sm md:text-xl space-y-2 md:space-x-0">
            <li>Linux</li>
            <li>Git</li>
            <li>Docker</li>
            <li>K8s</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const about = () => {
  return (
    <div className="w-full flex flex-row row-span-3 justify-start md:justify-center text-white min-h-screen h-full">
      <div className="hidden lg:flex flex-col justify-start items-start text-xl">
        <ul className="fixed left-[10px] lg:left-[5rem] top-[13.4rem]">
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
              <li
                key={idx}
                className="text-gray-400 hover:text-gray-200 cursor-pointer"
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
                <h2 className="pb-2 text-gray-400 text-2xl md:text-3xl">
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
    </div>
  );
};

export default about;
