import React from "react";
import Navbar from "./app/component/navbar/navbar";
import Home from "./app/pages/home/home";
import About from "./app/pages/about/about";
import Skill from "./app/pages/skill/skill";
import Project from "./app/pages/project/project";
import Services from "./app/pages/service/services";
import Contact from "./app/pages/contact/contact";
import Footer from "./app/pages/footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
