import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 hover:border-cyan-400 select-none">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className=" w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div
            className="sm:text-right text-2xl font-bold "
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <p>Hi. I'm Nguyen Nhat Thanh, nice to meet you!</p>
          </div>
          <div>
            <p
              className="text-xl md:text-2xl pb-4"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              I'm a front-end developer and I graduated from university.
            </p>
            <p
              className="text-xl md:text-2xl pb-4"
              data-aos="slide-left"
              data-aos-duration="1200"
            >
              I'm an inquisitive, fun and progressive person at work.
            </p>
            <p
              className="text-xl md:text-2xl pb-4"
              data-aos="slide-left"
              data-aos-duration="1400"
            >
              Besides, it is indispensable that I love and passionate about
              website programming.
            </p>
            <p
              className="text-xl md:text-2xl pb-4"
              data-aos="slide-left"
              data-aos-duration="1600"
            >
              I want to create modern, beautiful and user-friendly websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
