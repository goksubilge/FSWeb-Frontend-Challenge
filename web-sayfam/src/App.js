// import "./reset.css";
import "./App.css";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";
import Profile from "./components/Profile";
import "./dmButton.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap%27);
</style>;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.querySelector("html").classList.toggle("dark", darkMode);
  };

  return (
    <div>
      <div className="flex flex-col justify-center mx-auto my-0 max-w-[1440px] py-[2%] px-[8%] font-normal text-[#6B7280] dark:bg-[#252128] dark:text-white">
        <Header toggle={!darkMode} setToggle={toggleDarkMode} />
        <Hero />
        <Skills />
        <hr />
        <Profile />
        <hr />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
