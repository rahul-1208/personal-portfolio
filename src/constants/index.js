import project3 from "../assets/projects/project-3.jpg";
import Streaming from "../assets/projects/Streaming.png";
import collaborative from "../assets/projects/Collaborative.png";
import tracker from "../assets/projects/coronavirus_tracker.png";

export const HERO_CONTENT = `Hello! I am a software developer dedicated to crafting seamless digital experiences. With experience in full stack development, I specialize in frameworks like React and Spring Boot and have strong cloud skills in AWS. My portfolio includes impactful projects like building dashboards for YouROK and optimizing telecom systems at Infosys. Certified in AWS and Generative AI, I bring both technical depth and adaptability.From developing real-time reporting systems to deploying microservices, I am driven by a commitment to innovation and creating solutions that deliver exceptional user experiences. `;

export const ABOUT_TEXT = `I am a passionate software engineer with a focus on full-stack development and cloud technologies. With hands-on experience building secure, data-driven solutions using React, Java, and Spring Boot, I specialize in developing scalable software that drives business growth. I hold a Master’s in Computer Science from the University of North Texas and am certified in AWS and Generative AI. My project experience spans diverse fields, including mental health and telecommunications, where I’ve delivered efficient, user-centric applications. Thriving in Agile environments, I enjoy solving complex problems and enhancing software performance with tools like Docker, Kubernetes, and MySQL. Let’s build something amazing together!`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "React Web Developer",
    company: "YouROK",
    description: [
      "Collaborated closely with UX design teams to break down wireframes(UX/UI designs) into reusable React components, ensuring consistent and user-friendly UI implementations.",
      "Developed a multi-page React.js dashboard, improving navigation and usability across four key modules while integrating Apollo Client to fetch data efficiently from the backend using GraphQL queries, enhancing overall application performance.",
      "Incorporated AWS SES and Cloudflare Turnstile CAPTCHA to enhance email communication and user authentication, enabling personalized notifications and reducing bot-related activities by 30%.",
      "Integrated real-time data visualization with Apex Charts and designed a customizable settings page, enhancing counselor insights and boosting user engagement by 15%.",
    ],
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  },
  {
    year: "2020 - 2022",
    role: "Senior Systems Engineer",
    company: "Infosys",
    description: [
      "Contributed to the implementation of the Provision Controller project using Java and Spring Boot, which improved task flow management for service provisioning, leading to a 30% increase in operational efficiency.",
      "Improved SQL query performance by optimizing joins, indexing, and query execution plans, reducing data retrieval time by 30%.",
      "Diagnosed and resolved production incidents by analyzing application logs, performing root cause analysis, and leveraging SQL for debugging and data validation, ensuring timely fixes and achieving a 25% reduction in post-release defects.",
      "Worked directly with product managers and engineers through Agile methodologies and JIRA for project tracking, contributing to a 40% faster project delivery while maintaining high-quality standards.",
    ],
    technologies: ["Java", "Spring Boot", "RESTful APIs", "mySQL"],
  },
  {
    year: "2020 - 2020",
    role: "Full Stack Developer",
    company: "Best Tax Filer",
    description: [
      "Migrated a legacy PHP application to React and Spring Boot, utilizing caching strategies and secure authentication to improve API response times by 15% and strengthen security against unauthorized access.",
      "Developed dynamic, responsive front-end features using React and Material UI (MUI), implementing lazy loading, dynamic routing, and a structured menu system, resulting in 20% improvement in page load speed.",
      "Built an encryption module to secure sensitive data such as bank details, reducing data exposure risks by 25% and enhancing application security compliance.",
    ],
    technologies: ["Java", "Spring Boot", "RESTful APIs", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Microservices Streaming Platform",
    image: Streaming,
    description:
      "A fully functional video streaming platform that enables users to upload, transcode, and watch videos with adaptive quality options for an enhanced viewing experience.",
    technologies: ["React", "Spring Boot", "RabbitMQ", "MongoDB"],
  },
  {
    title: "Real-Time Collaborative Document Platform",
    image: collaborative,
    description:
      "A real-time document editing platform enabling secure, collaborative editing with role-based access control and instant updates for multiple users.",
    technologies: ["WebSocket", "Spring Boot", "React"],
  },
  {
    title: "Coronavirus Tracker",
    image: tracker,
    description:
      "A scheduled service that fetches and displays real-time COVID case data, with a responsive interface and cloud deployment for accessible, up-to-date information.",
    technologies: ["Thymeleaf", "Apache Commons CSV", "Spring Boot", "AWS EC2"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Dallas, Texas ",
  phoneNo: "+1(774)-518-7697 ",
  email: "rahulballa.connect@gmail.com",
};
