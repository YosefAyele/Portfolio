import React, { useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { fadeIn, popUp, textVariant } from "../utils/motion";
import { programmerImage, programmerImage3 } from "../assets";

import Typed from "react-typed";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      console.log("size changed");
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
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
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <section className="relative w-full h-screen">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row flex-[2] items-start gap-5`}
        >
          <div className="flex flex-col  justify-center items-center mt-5">
            {/* The dot */}
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            {/* The line gradient */}
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          {/* The text next to the gradient */}
          <div className="flex flex-col justify-center">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm {" "}
              <Typed
                strings={[
                  "Yosef",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
                className="text-[#915eff]"
                cursorChar="!"
              />
              {" "}
            </h1>
            <motion.p variants={textVariant()} className={`${styles.heroSubText} mt-5 text-white-100`}>
              I'm A Software Engineer <br className="sm:hidden block" />{" "}
              passionate about web and mobile development and Machine Learning.
            </motion.p>
            <img
              className="mx-auto mt-[150px] md:mt-0"
              src={programmerImage3}
            />
          </div>
        </div>
        <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
              <motion.dev
                animate={{
                  y: [-10, 20, -10],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
