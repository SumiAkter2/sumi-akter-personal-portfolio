import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import ExperienceCard from "./HtmlSlide/ExperienceCard/ExperienceCard";
import HtmlSlide from "./HtmlSlide/HtmlSlide";
import Performance from "./Performance/Performance";
import Projects from "./Performance/Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log("engine");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log("container");
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 140,
              enable: true,
              opacity: 0.5,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "bottom",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 8 },
            },
          },
          detectRetina: true,
        }}
      />
      <Banner />
      <About />
      <HtmlSlide />
      <ExperienceCard />
      <Testimonial />
      <Performance />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
