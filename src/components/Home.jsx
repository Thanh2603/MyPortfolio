import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#14150e] text-4xl ">Hi, my name is</p>
        <h1 className="text-2xl sm:text-5xl font-bold text-[#14150e]">
          Nguyen Nhat Thanh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-cyan-600">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 80,
              strings: ["I'm a Front-end Developer"],
            }}
          />
        </h2>
        <p className=" py-4 max-w-[700px] text-[#14150e]">
          I am a frontend developer. Current I have graduated from university
          and am looking for a job. I'm focused on building user interface and
          responsive web applications
        </p>
        <div>
          <button className="text-cyan-950 group border-t-2  px-6 py-3 my-2 flex items-center hover:bg-slate-600 hover:border-cyan-400 duration-150 hover:text-cyan-400">
            <Link to="projects" smooth={true} duration={500}>
              View My Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
