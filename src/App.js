import React from "react";
import "./App.css";
import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";
import Experience from "./components/Experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
