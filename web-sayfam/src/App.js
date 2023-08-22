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
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap%27);
</style>;

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center mx-auto my-0 max-w-[1440px] py-[2%] px-[8%] font-normal text-[#6B7280]">
        <Header toggle={toggle} setToggle={setToggle} />
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
