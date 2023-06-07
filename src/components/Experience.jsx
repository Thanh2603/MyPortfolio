import React from "react";
import CompanyLogo from "../assets/company-logo.png";
const Experience = () => {
  return (
    <div name="experience" className="w-full md:h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 hover:border-cyan-400">
            Experience
          </p>
          <p className="py-4">//My work experience</p>
        </div>
        <div className="w-full flex justify-between items-center select-none">
          <div className="flex items-center md:text-3xl">
            <img className="w-28" src={CompanyLogo} alt="Company Logo" />
            <p className="t ml-12 text-cyan-700">
              INTERNSHIP - ALTA SOFTWARE (5/2022 - 7/2022)
              <br />
              Position : Front-end Developer
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className=" text-xl md:text-3xl">Roles and responsibilities </h3>
          <p className="py-2 text-base md:text-2xl">
            - Learn the theory of reactjs , typescript and firebase
          </p>
          <p className="py-2 text-base md:text-2xl ">
            - Programming website interfaces according to designs available on
            Figma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
