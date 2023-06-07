import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import SCSS from "../assets/scss.png";
import Javascript from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 hover:border-cyan-400  ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-14">
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto saturate-50 group-hover:saturate-100 duration-500 "
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto  saturate-50 group-hover:saturate-100 duration-500"
              src={CSS}
              alt="HTML icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto saturate-50 group-hover:saturate-100 duration-500"
              src={SCSS}
              alt="HTML icon"
            />
            <p className="my-4">SCSS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto saturate-50 group-hover:saturate-100 duration-500"
              src={Javascript}
              alt="HTML icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto saturate-50 group-hover:saturate-100 duration-500"
              src={ReactJS}
              alt="HTML icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto saturate-50 group-hover:saturate-100 duration-500"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-4">TailWind CSS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 hover:bg-cyan-50 pt-4 group select-none">
            <img
              className="w-20 mx-auto saturate-50 group-hover:saturate-100 duration-500"
              src={Github}
              alt="HTML icon"
            />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
