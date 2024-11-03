
import project3 from "../assets/projects/project-3.jpg";
import Streaming from "../assets/projects/Streaming.png";
import collaborative from "../assets/projects/Collaborative.png";
import tracker from "../assets/projects/coronavirus_tracker.png";

export const HERO_CONTENT = `Hello! I am a software developer dedicated to crafting seamless digital experiences. With a knack for building full-stack applications, I specialize in frameworks like React and Spring Boot, combined with cloud expertise in AWS. I have led impactful projects, from creating dashboards at YouROK to optimizing telecom systems at Infosys. Certified in AWS and Generative AI, I bring both technical depth and adaptability. Whether developing real-time reporting systems or deploying microservices, I’m always looking for opportunities to innovate, grow, and make a difference through technology. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate software engineer with a focus on full-stack development and cloud technologies. I have experience building secure, data-driven solutions using React, Java, and Spring Boot. With a Master’s in Computer Science from the University of North Texas and certifications in AWS and Generative AI, I specialize in developing scalable software. I’ve successfully contributed to projects in mental health and telecom sectors, delivering efficiency and user-centric applications. I thrive in Agile environments and enjoy working with tools like Docker, Kubernetes, and MySQL to solve complex problems and enhance software performance. Let’s build something amazing together!`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "React Web Developer",
    company: "YouROK",
    description: `Designed and developed a multi-page React.js dashboard with four key modules—Dashboard, Users, Reports, and Settings. Implemented role-based access control to enhance security and reduced onboarding time by 30%. Built real-time reports with Apex Charts, improving insights generation by 20%, and added customizable settings, boosting user engagement by 15%.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  },
  {
    year: "2020 - 2022",
    role: "Senior Systems Engineer",
    company: "Infosys",
    description: `I played a key role in the Provision Controller project using Java and Spring Boot, improving task flow management and boosting operational efficiency by 30% for a telecom company. I collaborated with cross-functional teams to implement microservices and RESTful APIs, optimizing resource allocation based on service availability. I utilized SQL for data analysis and debugging, reducing post-release defects by 25% and ensuring smooth service delivery. Through Agile practices and JIRA tracking, I worked closely with product managers and engineering teams to deliver projects 40% faster while maintaining high-quality standards.`,
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
