import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import MachineLearningIcon from './../public/assets/icons/machine_learning.svg'

const staticText = {
  owner: "Shaleen Srivastava",
  designation: "Full-Stack Developer",
  aboutMain:     "I'm Shaleen Srivastava, a Java Spring Boot and Full-Stack\n" +
      "           enthusiast with a strong foundation in software\n" +
      "          development and intelligent systems. Recently, completed\n" +
      "          B.Tech in Electronic and Telecommunications at\n" +
      "          Bharati Vidyapeeth University, Pune, I specialize\n" +
      "          in integrating AI technologies to\n" +
      "          create innovative, user-centric applications. My\n" +
      "          expertise spans Java, Spring Boot, SQL, React and\n" +
      "          various web development frameworks, enabling me\n" +
      "          to develop and optimize solutions that enhance user\n" +
      "          experiences and solve complex problems through AI.",
  aboutSub: "Let's collaborate to bring your ideas to life!",
  mail: "shaleensri8@gmail.com",

}

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  // {
  //   title: "AI/ML Engineer",
  //   icon: <MachineLearningIcon />,
  // },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "Java",
      icon: "/assets/tech/Java_programming_language_logo.svg.png",
      link: "https://www.java.com/en/"
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
  ],
  frameworks: [
    {
      name: "Spring Boot",
      icon: "/assets/tech/images.png",
      link: "https://spring.io/"
    },
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "React.js",
      icon: "/assets/tech/react.svg",
      link: "https://reactjs.org/"
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
  ],
  // libraries: [
  //   {
  //     "name": "Pandas",
  //     "icon": "/assets/tech/pandas.svg",
  //     "link": "https://pandas.pydata.org/"
  //   },
  //   {
  //     "name": "NumPy",
  //     "icon": "/assets/tech/numpy.svg",
  //     "link": "https://numpy.org/"
  //   },
  //   {
  //     "name": "PyTorch",
  //     "icon": "/assets/tech/pytorch.svg",
  //     "link": "https://pytorch.org/"
  //   },
  //   {
  //     "name": "TensorFlow",
  //     "icon": "/assets/tech/tensorflow.svg",
  //     "link": "https://www.tensorflow.org/"
  //   },
  //   {
  //     "name": "Keras",
  //     "icon": "/assets/tech/keras.svg",
  //     "link": "https://keras.io/"
  //   },
  //   {
  //     "name": "OpenCV",
  //     "icon": "/assets/tech/opencv.svg",
  //     "link": "https://opencv.org/"
  //   },
  //   {
  //     "name": "Scikit-Learn",
  //     "icon": "/assets/tech/scikitlearn.svg",
  //     "link": "https://scikit-learn.org/"
  //   }
  // ],
  tools: [
    {
      name: "IntelliJ IDEA",
      icon: "/assets/tech/IntelliJ_IDEA_Icon.svg.png",
      link: "https://www.jetbrains.com/idea/",
    },
  
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "VSCode",
      icon: "/assets/tech/vscode.svg",
      link: "https://code.visualstudio.com/"
    }
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  {
    title: "Java Intern",
    company_name: "Automating Bits",
    icon: "/assets/company/hardcopy.svg",
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Gained hands-on experience in Java, Spring Boot, and SQL by building backend modules and working on live project tasks.",
      "Understood integration of backend services with frontend by working alongside frontend developers during development",
      "Collaborated with a team of 5+ developers to design, develop, and deploy scalable web applications, improving my teamwork and communication skills.",
      "Participated in code reviews and contributed to improving code quality and performance, resulting in a 15% reduction in bugs and enhanced application efficiency.",  
    ],
  },
  // {
  //   title: "Software Developer Intern",
  //   company_name: "Vaizle",
  //   icon: "/assets/company/vaizle.svg",
  //   iconBg: "#E6DEDD",
  //   date: "October 2022 - April 2023",
  //   points: [
  //     "Developed and maintained web applications using Angular.js and TailwindCSS",
  //     "Built and managed scalable APIs using NestJS, enhancing server-side performance and reducing API\n" +
  //     "response time by 25%. Designed APIs that handled 10,000+ concurrent requests, ensuring robust\n" +
  //     "performance during peak traffic",
  //     "Worked closely with 3 teams (project management, design, and development) to ensure timely project\n" +
  //     "delivery, resulting in 100% on-time completion of all projects.\n",
  //     "Consistently met client requirements and deadlines, resulting in a 95% satisfaction rate based on feedback\n" +
  //     "and project outcomes\n",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
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
    name: "Money Control: Your Stock Portfolio Tracker",
    description:
      "track stock performance, calculate profit/loss, analyze holding duration, and maintain a real-time updated portfolio",
    tags: [
      {
        name: "Java Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/MoneyControl.png",
    // source_code_link: "https://github.com/Uchiha-Itachi0/todo-backend",
    // deployed_link: "https://jartodo.netlify.app/",
  },
  {
    name: "Journal App: Your Personal Diary",
    description:
      " Built a RESTful backend with Spring Boot and MongoDB Atlas, implementing 5+ CRUD APIs for journal entries. Designed modular architecture with Controller, Service, Repository, and Entity layers to store the journal entries.",
    tags: [
      {
        name: "Java Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Maven",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/journalApp.avif",
    // source_code_link: "https://github.com/Uchiha-Itachi0/recommendation_system",
    // deployed_link: "https://github.com/Uchiha-Itachi0/recommendation_system",
  },
  {
    name: "Voice-Enabled AI Chatbot",
    description:
      " Built an interactive chatbot supporting voice and text conversations using STT/TTS for enhanced accessibility and engagement. Integrated Google API Key with Gemini 2.0 Flash model to deliver real-time, intelligent, and context-aware responses",
    tags: [
      {
        name: "Gemini 2.0",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "Machine-Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Google API-Key",
        color: "orange-text-gradient",
      },
      {
        name: "AI",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/AIchatbot.png",
    // source_code_link:
    //   "https://github.com/Uchiha-Itachi0/self_driving_car",
    // deployed_link:
    //   "https://github.com/Uchiha-Itachi0/self_driving_car",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/shaleens179",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "http://www.linkedin.com/in/shaleen-srivastava-b9b511229",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/shaleens08/",
  },
];

const heroTexts = [
  "Machine Learning Engineer",
  500,
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  staticText,
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
