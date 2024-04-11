import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";

import Flicking, { Panel } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { SectionWrapper } from "../hoc";

const CarouselComponent = ({ title, items, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 2)}
      className="pl-5"
    >
      <h6 className="font-light text-lg">{title}</h6>
      <Flicking align="prev" circular={false}>
        {items.map((item, index) => (
          <motion.div variants={fadeIn("right", "spring", 0.5, 0.5 * index)}>
            <a data-tooltip-id="icon-tooltip" data-tooltip-content={item.name}>
              <img
                className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] object-contain"
                src={item.icon}
                alt={item.name}
                key={`${item.name}-key`}
              />
            </a>
          </motion.div>
        ))}
      </Flicking>
      <Tooltip id="icon-tooltip" />
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-4">
        <p className={styles.sectionSubText}>
          Technologies that I am proficient with
        </p>
        <h2 className={styles.sectionHeadText}>Tech</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-6"
      >
        As a software developer, I am always learning new technologies and tools. These are some of the technologies that I have worked with. I am always looking to learn more and expand my skillset.
      </motion.p>

      <motion.div variants={textVariant()}>
        {/* carousel for languages and framewords */}
        <CarouselComponent
          title="Languages and Frameworks"
          items={technologies.languagesAndFrameworks}
          index={1}
        />
      </motion.div>

      <motion.div variants={fadeIn("right", "tween", 0.5, 1)}>
        {/* carousel for databases */}
        <CarouselComponent
          title="Databases"
          items={technologies.databases}
          index={2}
        />
      </motion.div>

      <motion.div variants={textVariant()}>
        {/* carousel for other */}
        <CarouselComponent
          title="Other tools"
          items={technologies.other}
          index={3}
        />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
