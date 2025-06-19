import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Project";
import Skills from "../components/Sklill";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Skills/>
    <Footer/>
    </>
  );
}

export default App;
