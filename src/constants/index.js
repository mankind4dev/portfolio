import {

  backend,
  reactNative,
  next1,
  frontend,
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
  meta,
  realcastle,
  tesla,
  gogoliveLogo,
  foresiteLogo,
  hotelIcon,
  realCastle,
  hotelbooking,
  gogolive,
  myPortfolio,
  htmlCssPortfolio,
  threejs,
  crystalBead,
  promisedBag,
  noah
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "Next.JS 13 Developer",
    icon: next1,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Gogolive",
    icon: gogoliveLogo,
    iconBg: "#383E56",
    date: "Feb 2023 - July 2023",
    points: [
      "Played a key role in the development of Login and Signup resulting in User Authentication",
      "Collaborated with cross-functional teams to gather and analyze requirements for new features.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Foresite",
    icon: foresiteLogo,
    iconBg: "#383E56",
    date: "Feb 2023 - July 2023",
    points: [
      "Played a key role in the development of Login and Signup resulting in User Authentication",
      "Collaborated with cross-functional teams to gather and analyze requirements for new features.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Satck Developer",
    company_name: "Realcastle",
    icon: realcastle,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developed and maintained responsive and interactive web applications using Frontend technologies.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Participated in agile development processes and attended regular sprint meetings.",
      "Integrated RESTful APIs to fetch and display dynamic content on web pages.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Hotelbooking",
    icon: hotelIcon,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Conducted A/B testing and analyzed user feedback to iterate and improve features.",
      "Collaborated with backend developers to ensure seamless integration between frontend and backend systems",
      "Integrated RESTful APIs to fetch and display dynamic content on web pages.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  /* {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, */
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mankind4dev proved me wrong.",
    name: "Adebanke Ojufun",
    designation: "CEO",
    company: "Promised_Bag",
    image: "promisedBag",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mankind4dev does.",
    name: "Abisola Ogunmakin",
    designation: "CEO",
    company: "Crystal Beads",
    image: "crystalBead",
  },
  {
    testimonial:
      "After Mankind4dev optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Adewale Noah",
    designation: "CEO",
    company: "Noahs Automobile",
    image: "noah",
  },
];

const projects = [
  {
    name: "Real Castle",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MERN.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realCastle,
    source_code_link: "https://github.com/mankind4dev/real-castle",
  },
  {
    name: "Hotel Booking",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React.tsx",
        color: "blue-text-gradient",
      },
      {
        name: "MERN.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hotelbooking,
    source_code_link: "https://github.com/mankind4dev/hotel_booking",
  },
  {
    name: "Gogolive",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gogolive,
    source_code_link: "https://github.com/mankind4dev/capstone-project",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio is a attestation to my expertise, providing concrete examples of my work. This compilation serves as a showcase of my ability to tackle intricate problems, navigate diverse technologies, effectively lead and manage projects. It stands as a comprehensive demonstration of my proficiency and experience in the field.",
    tags: [
      {
        name: "React 3D",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/mankind4dev/Mankind4dev_3D_portfolio",
  },
  {
    name: "HTML & CSS Protfolio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Portfolio",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: htmlCssPortfolio,
    source_code_link: "https://github.com/mankind4dev/portfolio_html_css_js",
  },
];

export { services, technologies, experiences, testimonials, projects };
