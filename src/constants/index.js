import {
  mlscertif,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  django,
  vue,
  angular,
  sklearn,
  nest,
  pandas,
  mysql,
  a2sv,
  imageshq,
  typetest,
  atrons,
  rti,
  eta,
  eskalate,
  musicapp,
  ehpsa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = {
  languagesAndFrameworks: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "pandas",
      icon: pandas,
    },
    {
      name: "Nest JS",
      icon: nest,
    },
    {
      name: "SciKit Learn",
      icon: sklearn,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Django",
      icon: django,
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ],
  other: [
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ],
};

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Eskalate",
    icon: eskalate,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "With a team of 5 implemented a redisigned UI for A2SV's website using Vue.js.",
      "Implemented lots of new features to the website.",
      "Handled state management using Vuex.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "EHPSA (Ethiopian Health Profession Students Association)",
    icon: ehpsa,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Oct 2023",
    points: [
      "With a team of 8 worked on a membership management website for EHPSA, which has over 30,000 users.",
      "Implemented lresponsive UI components with ReactJS and tailwindCSS.",
      "Handled state management withs Redux.",
    ],
  },
  {
    title: "Vue.js Developer",
    company_name: "A2SV (Africa to Silicon Valley)",
    icon: a2sv,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      "With a team of 8, developed a web-based digital library system for over 500 university students to share learning resources and collaborate.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    title: "Rate the Instructor",
    description:
      "Web-based platform that allows university students to rate their instructors and view ratings for other instructors.",
    image: rti,
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Atrons",
    description:
      "With a team of 8 developed a web-based digital library system, to be used by over 500 university students, that allows users to share learning resources and collaborate in their studies.",

    image: atrons,
    githubLink: "#",
    liveLink: "",
  },
  {
    title: "Images HQ",
    description:
      "A react app that takes in a search term and returns images related to the search term. It uses the google custom search API to fetch the images.",
    image: imageshq,
    githubLink: "#",
    liveLink: "",
  },
  {
    title: "MusicHALL",
    description:
      "A fullstack music streaming app with a built in music player, built with ReactJS and ExpressJS.",
    image: musicapp,
    githubLink: "",
    liveLink: "https://music-app-ten-zeta.vercel.app/",
  },
  {
    title: "TypeTest",
    description:
      "A typing test app that allows users to test their typing speed and accuracy. Built with ReactJS amd redux.",
    image: typetest,
    githubLink: "https://github.com/Tura-lab/typeracer",
    liveLink: "https://typetest-delta.vercel.app/",
  },
  {
    title: "Event Ticketing app",
    description:
      "An event ticketing app that allows users to create events and sell tickets for their events.",
    image: eta,
    githubLink: "https://github.com/Leul-deg/Event-ticketing-app",
    liveLink: "https://github.com/Leul-deg/Event-ticketing-app",
  },
];

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford University)",
    link: "https://coursera.org/share/f1160ba8e2f72c73b50cafff891ea67e",
    image: mlscertif,
  }
]

export { services, technologies, experiences, testimonials, projects, certifications };
