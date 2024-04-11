import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { programmerImage } from "../assets";

// serviceKey service_0d1u09d
// template id template_wff9i8i
// public key k6aEDssnQsAUcP4WA

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0d1u09d",
        "template_wff9i8i",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Yosef",
          to_email: "yosefayele05@gmail.com",
        },
        "k6aEDssnQsAUcP4WA"
      )
      .then(() => {
        setLoading(false);
        alert("Thanks! I will get back to you");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }).catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Something went wrong. Please try again later");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[2] bg-black-100 p-8 rounded-2xl md:w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onsubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {/* an image that is motion.img that slides in from the right */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <img src={programmerImage} alt="programmer" className="max-w-[400px]" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
