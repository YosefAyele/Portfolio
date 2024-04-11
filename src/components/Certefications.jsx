import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { certifications } from "../constants";
import { BiLinkExternal } from "react-icons/bi";

const CertificateCard = ({
  title,
  issuer,
  link,
  image,
  index
}) => {
  return (
    <motion.div variants={fadeIn("bottom", "spring", 0.5 * index, 2)}
    >
      
      <div className="max-w-[300px] h-[425px] black-blue-gradient p-4 rounded-[20px] hover:scale-110 transition-all shadow-md">
        <div className="flex flex-col justify-between rounded-sm">
          {/* The image */}

          <div className="">
            <a href={link}>
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
              <a href={link} className="p-1 bg-slate-700 rounded-[17px]">
                <BiLinkExternal size={20} />
              </a>
            </span>
          </div>

          {/* The description */}
          <div>
            <p className="">
              {issuer}
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
        <p className={styles.sectionSubText}>My certifications</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are certifications I have earned over the years.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {certifications.map((certif, index) => (
          // on hover scale to 150%
          <CertificateCard key={certif.title} index={index} {...certif} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
