import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, popUp, textVariant, zoomIn } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { github, webicon } from "../assets";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  index,
}) => {
  return (
    <motion.div variants={fadeIn("bottom", "spring", 0.5 * index, 2)}
    >
      
      <div className="max-w-[300px] h-[425px] black-blue-gradient p-4 rounded-[20px] hover:scale-110 transition-all shadow-md">
        <div className="flex flex-col justify-between rounded-sm">
          {/* The image */}

          <div className="">
            <a href={liveLink}>
              <img
                src={image}
                className="rounded-lg z-0 max-h-[190px] w-full"
              />
            </a>
          </div>

          {/* The title */}
          <div className="flex flex-row justify-between items-center mt-3 mb-3">
            <h4 className="text-white text-left font-bold text-[25px]">
              {title}
            </h4>
            <span className="flex flex-row">
              <a href={githubLink} className="p-1 bg-slate-700 rounded-[17px]">
                <img
                  src={github}
                  alt="github"
                  className="max-w-[25px] max-h-[25px]"
                />
              </a>
            </span>
          </div>

          {/* The description */}
          <div>
            <p className="">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are some of the projects that I have worked on. I hope they give
        you a good idea of my skills and experience.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((service, index) => (
          // on hover scale to 150%
          <ProjectCard key={projects.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
