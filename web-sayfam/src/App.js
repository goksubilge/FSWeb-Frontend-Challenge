import "./reset.css";
import "./App.css";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? "App.dark" : "App"}>
      <div className="">
        <Header toggle={toggle} setToggle={setToggle} />
        <hr />
        <Hero />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
