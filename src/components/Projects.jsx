import React from "react";
import ProjectImg from "../assets/project.png";
import ProjectImg2 from "../assets/project2.png";
import ProjectImg3 from "../assets/project3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div name="projects" className="  w-full md:h-screen text-cyan-700">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-cyan-700 hover:border-cyan-400">
            Projects
          </p>
          <p className="py-6" data-aos="zoom-in">
            //Check out some of my projects
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${ProjectImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            data-aos="slide-right"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl mx-auto font-bold text-cyan-800 tracking-wider">
                HTML&CSS, Javascript Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-cyan-50 font-bold text-lg hover:bg-slate-600">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Thanh2603/https---github.com-Thanh2603-Shopee">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-cyan-50  hover:bg-slate-600 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ProjectImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            data-aos="zoom-out"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-1xl mx-auto font-bold text-cyan-800 tracking-wider ">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://gymclone-thanh2603.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-cyan-50  hover:bg-slate-600 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Thanh2603/gym-clone">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-cyan-50  hover:bg-slate-600 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ProjectImg3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            data-aos="slide-left"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl mx-auto font-bold text-cyan-800 tracking-wider">
                HTML&CSS, Javascript Project
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-cyan-50  hover:bg-slate-600font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Thanh2603/W3TheBand">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-cyan-50  hover:bg-slate-600 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
