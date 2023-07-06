import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {showGoToTop && (
        <button
          onClick={handleGoToTop}
          className="p-4 text-2xl bg-cyan-400 fixed right-5 bottom-5 cursor-pointer hover:bg-cyan-200"
        >
          {<AiOutlineArrowUp />}
        </button>
      )}
    </div>
  );
}

export default App;
