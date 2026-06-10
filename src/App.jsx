import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Project";
import Skills from "../components/Sklill";
import { useEffect, useMemo, useState } from "react";
import { contact, content } from "./content";

function App() {
  const [language, setLanguage] = useState("id");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const t = content[language];
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const appClassName = useMemo(
    () =>
      [
        "min-h-screen scroll-smooth transition-colors duration-300",
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950",
      ].join(" "),
    [isDark]
  );

  const toggleLanguage = () => {
    setLanguage((current) => (current === "id" ? "en" : "id"));
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className={appClassName}>
      <Navbar
        isDark={isDark}
        language={language}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
        t={t.nav}
      />
      <main>
        <Hero isDark={isDark} t={t.hero} />
        <About isDark={isDark} t={t.about} />
        <Projects isDark={isDark} t={t.projects} />
        <Skills isDark={isDark} t={t.skills} />
        <Contact contact={contact} isDark={isDark} t={t.contact} />
      </main>
      <Footer contact={contact} isDark={isDark} text={t.footer} />
    </div>
  );
}

export default App;
