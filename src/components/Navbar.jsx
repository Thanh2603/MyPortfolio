import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#171810] text-gray-300 z-10 ">
      <Link to="home" smooth={true} duration={500}>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "100px", height: "80px" }}
        />
      </Link>
      {/* Menu */}
      <ul className="hidden md:flex ">
        <li className=" hover:text-cyan-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" hover:text-cyan-400">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:text-cyan-400">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:text-cyan-400">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className=" hover:text-cyan-400">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className=" hover:text-cyan-400">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Mobile Menu */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-gray-500 flex flex-col justify-center items-center mt-20"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Socials Icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]">
            <a
              href="https://www.linkedin.com/in/nguyen-nhat-thanh-3b2657261/"
              className="flex justify-between items-center w-full text-gray-200"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600">
            <a
              href="https://github.com/Thanh2603"
              className="flex justify-between items-center w-full text-gray-200"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              href="mailto:bestorder2k@gmail.com"
              className="flex justify-between items-center w-full text-gray-200"
            >
              Email <AiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-600">
            <a
              href="/about"
              className="flex justify-between items-center w-full text-gray-200"
            >
              Resume <BsFillPersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Scroll top  */}
    </div>
  );
};

export default Navbar;
