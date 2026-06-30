import typescriptPdf from "@/assets/files/certificates_pdf/TypeScript.pdf";
import awsEcsPdf from "@/assets/files/certificates_pdf/aws_ecs.pdf";
import cybersecurityPdf from "@/assets/files/certificates_pdf/cybersecurity_virtual_program.pdf";
import dockerPdf from "@/assets/files/certificates_pdf/docker_fundamentals.pdf";
import javascriptPdf from "@/assets/files/certificates_pdf/javascript.pdf";
import pythonPdf from "@/assets/files/certificates_pdf/python.pdf";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "AWS For Beginners",
    issuer: "Great Learning",
    date: "October 2024",
    link: "https://drive.google.com/file/d/17b6G1U3eJ006VCaDQshd7nfmR_a-FM9w/view?usp=drive_link",
    description:
      "Learned the fundamentals of AWS cloud services and deployment through hands-on exercises.",
    skills: [
      "AWS Cloud Fundamentals",
      "Amazon EC2",
      "Amazon S3",
      "IAM (Identity & Access Management)",
      "Cloud Deployment"
    ],
  },
  {
    id: 2,
    title: "Basics of Computer Networking",
    issuer: "Great Learning",
    date: "November 2024",
    link: "https://drive.google.com/file/d/1yKdzzJaFpttLo5dHhcoqZFyViIhG_nJh/view?usp=sharing",
    description:
      "Learned the fundamentals of computer networking, including network models, protocols, IP addressing, and data communication concepts.",
    skills: [ 
      "Computer Networking",
      "TCP/IP",
      "OSI Model",
      "IP Addressing",
      "Network Protocols"
    ],
  },
  {
    id: 3,
    title: "Basics of Machine Learning",
    issuer: "Great Learning",
    date: "October 2024",
    link: "https://drive.google.com/file/d/1gGjFT35ZH2QYJKIFx2SYZDqoZ87XpyZW/view?usp=sharing",
    description:
      "Learned the fundamentals of machine learning, including data preprocessing, model building, and basic predictive algorithms.",
    skills: [
        "Machine Learning",
        "Data Preprocessing",
        "Supervised Learning",
        "Model Evaluation",
        "Python for Machine Learning"
    ],
  },
  {
    id: 4,
    title: "Database Management System",
    issuer: "Great Learning",
    date: "November 2024",
    link: "https://drive.google.com/file/d/1EGwkOuI0D2_ppt3yP84_Q07WrJJfDApc/view?usp=sharing",
    description:
      "Learned the fundamentals of database management, including designing, querying, and managing relational databases using SQL.",
    skills: [
        "Database Management",
        "SQL",
        "Relational Databases",
        "Database Design",
        "Query Optimization"
    ],
  },
  {
    id: 5,
    title: "Ethical Hacking - Mobile Platforms and Network Architecture",
    issuer: "Great Learning",
    date: "October 2024",
    link: "https://drive.google.com/file/d/1F3cOFdejtZE8JYqXWhCiHVGbilC_niYm/view?usp=sharing",
    description:
      "Learned the fundamentals of ethical hacking, mobile platform security, and network architecture to identify and mitigate security vulnerabilities.",
    skills: [
        "Ethical Hacking",
        "Mobile Security",
        "Network Architecture",
        "Network Security",
        "Vulnerability Assessment"
    ],
  },
  {
    id: 6,
    title: "Front End Development - CSS",
    issuer: "Great Learning",
    date: "October 2024",
    link: "https://drive.google.com/file/d/16AmyoQn3deR8IJkWgYjmzqZcwFd1J8If/view?usp=sharing",
    description:
      "Learned the fundamentals of CSS to create responsive, visually appealing, and user-friendly web interfaces.",
    skills: [
        "CSS3",
        "Responsive Web Design",
        "Flexbox",
        "CSS Grid",
        "Web Styling"
    ],
  },

  {
    id: 7,
    title: "Front End Development - HTML",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1NTG98RXQZZwrgETdFveFoAe3r58FRW6z/view?usp=sharing",
    description:
      "Learned the fundamentals of HTML5 to build structured, semantic, and accessible web pages.",
    skills: [
        "HTML5",
        "Semantic HTML",
        "Web Page Structure",
        "Forms & Input Elements",
        "Accessibility"
    ],
  },

   {
    id: 8,
    title: "Introducción a la Inteligencia Artificial",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1FUYIS6v3vdVpFXGen66iwgDJbpY1IPP_/view?usp=sharing",
    description:
      "Learned the fundamentals of Artificial Intelligence, including core AI concepts, problem-solving techniques, and basic machine learning principles.",
    skills: [
        "Artificial Intelligence",
        "Machine Learning Basics",
        "Problem Solving",
        "Data Analysis",
        "AI Fundamentals"
    ],
  },
   {
    id: 9,
    title: "Introduction to Cyber Security",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1H7D4YeBi78kWNCRvSDy8NJaQ7-qvtnP9/view?usp=sharing",
    description:
      "Learned the fundamentals of cybersecurity, including threat detection, network security, and best practices for protecting digital systems.",
    skills: [
        "Cybersecurity",
        "Network Security",
        "Threat Detection",
        "Security Best Practices",
        "Risk Management"
    ],
  },
   {
    id: 10,
    title: "Introduction to Deep Learning",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1DX4basRer6HO9kaqDvbZAeg9mvlamcO_/view?usp=sharing",
    description:
      "Learned the fundamentals of deep learning, including neural networks, model training, and AI-based prediction techniques.",
    skills: [
        "Deep Learning",
        "Neural Networks",
        "TensorFlow Basics",
        "Model Training",
        "AI Fundamentals"
    ],
  },
   {
    id: 11,
    title: "Introduction to Ethical Hacking",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1sdolnU5pTNNl16l2n8r_QNQIX-oeonGu/view?usp=sharing",
    description:
      "Learned the fundamentals of ethical hacking, including identifying vulnerabilities, understanding cyber threats, and applying basic security practices.",
    skills: [
        "Ethical Hacking",
        "Cybersecurity",
        "Vulnerability Assessment",
        "Network Security",
        "Penetration Testing Basics"
    ],
  },
   {
    id: 12,
    title: "Introduction to Information Security",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1HtORustId8f03M-9xVWjh796TnVmSFns/view?usp=sharing",
    description:
      "Learned the fundamentals of information security, including protecting data, managing risks, and implementing core security principles.",
    skills: [
        "Information Security",
        "Data Protection",
        "Risk Management",
        "Security Principles",
        "Cybersecurity Fundamentals"
    ],
  },
   {
    id: 13,
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/16SHNqgQjppIju17Ly71SsPnlNLXLESQj/view?usp=sharing",
    description:
      "Learned the fundamentals of JavaScript, including variables, functions, DOM manipulation, and interactive web development.",
    skills: [
         "JavaScript (ES6+)",
          "DOM Manipulation",
          "Functions & Events",
          "Control Flow",
          "Web Development"
    ],
  },
   {
    id: 14,
    title: "Java Programming",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1V_MY9g99ju5MqQEgNGiW0PrF1Z8hP6Fa/view?usp=sharing",
    description:
      "Learned the fundamentals of Java programming, including object-oriented programming, data structures, and application development concepts.",
    skills: [
        "Java",
        "Object-Oriented Programming (OOP)",
        "Data Structures",
        "Exception Handling",
        "Problem Solving"
    ],
  },
   {
    id: 15,
    title: "Linux Tutorial",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1Z14DF2AtxGUtckcsqy6Z4MSoc4Dz4Fhf/view?usp=sharing",
    description:
      "Learned the fundamentals of Linux, including command-line operations, file management, system administration, and shell scripting basics.",
    skills: [
        "Linux",
        "Linux Command Line",
        "Shell Scripting",
        "File System Management",
        "System Administration"
    ],
  },
   {
    id: 16,
    title: "React JS Tutorial",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1gX7fjzS2HPSX1yTr1cYOjKsV0f7fa9qk/view?usp=sharing",
    description:
      "Learned the fundamentals of React.js, including component-based development, state management, hooks, and building dynamic web applications.",
    skills: [
         "React.js",
          "JSX",
          "React Hooks",
          "Component-Based Development",
          "State Management"
    ],
  },
   {
    id: 17,
    title: "Programming Basics",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1duaFqRXR-kF4hGIYkLQXYdqg6zDbWKeY/view?usp=sharing",
    description:
      "Learned the fundamentals of programming, including problem-solving, algorithms, data types, control structures, and basic coding concepts.",
    skills: [
        "Programming Fundamentals",
        "Problem Solving",
        "Algorithms",
        "Control Structures",
        "Data Types"
    ],
  },
   {
    id: 18,
    title: "Software Testing Tutorial",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1K0BwZ1ca67L48MvbDswQ1Qa8UKHeKPUo/view?usp=sharing",
    description:
      "Learned the fundamentals of software testing, including test planning, debugging, defect tracking, and quality assurance practices.",
    skills: [
        "Software Testing",
        "Manual Testing",
        "Test Case Design",
        "Bug Reporting",
        "Quality Assurance"
    ],
  },
   {
    id: 19,
    title: "Angular7 for Advanced Level",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1KAKmuMXKBeW3Ofq2vlFsiMqRBkU-v3M0/view?usp=sharing",
    description:
      "Learned advanced Angular 7 concepts, including component architecture, routing, services, forms, and building scalable single-page applications.",
    skills: [
        "Angular 7",
        "TypeScript",
        "Component-Based Development",
        "Routing & Navigation",
        "Dependency Injection"
    ],
  },
   {
    id: 20,
    title: "Cloud Foundations - Advanced",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1AnA-7shF_ZRuMlVPOvaFXvJN6xQNuYm9/view?usp=sharing",
    description:
      "Learned advanced cloud computing concepts, including cloud architecture, deployment models, security, and scalable infrastructure management.",
    skills: [
        "Cloud Computing",
        "Cloud Architecture",
        "Cloud Security",
        "Infrastructure Management",
        "Scalable Deployments"
    ],
  },
   {
    id: 21,
    title: "Angular7 for Intermediate Level",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1ukGMtEl9oetYJlyPbZ4DF2TcjQuTGk7L/view?usp=sharing",
    description:
      "Learned intermediate Angular 7 concepts, including routing, services, forms, state management, and building responsive single-page applications.",
    skills: [
        "Angular 7",
        "TypeScript",
        "Routing & Navigation",
        "Reactive Forms",
        "Component-Based Development"
    ],
  },
   {
    id: 22,
    title: "Binary Trees",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1jYNuPjSDiwle_TKhpvlt6206sCzFSTHM/view?usp=sharing",
    description:
      "Learned the fundamentals of binary trees, including tree traversal, insertion, deletion, and recursive problem-solving techniques.",
    skills: [
        "Binary Trees",
        "Tree Traversal",
        "Recursion",
        "Data Structures",
        "Algorithm Design"
    ],
  },
  {
    id: 23,
    title: "AWS Lambda Tutorial",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1-8MdFYQAEprkoPLaDB9FkrbuGrxZmNDH/view?usp=sharing",
    description:
      "Learned the fundamentals of AWS Lambda, including serverless computing, event-driven execution, and deploying cloud functions.",
    skills: [
        "AWS Lambda",
        "Serverless Computing",
        "Event-Driven Architecture",
        "Cloud Functions",
        "AWS Cloud Services"
    ],
  },
  {
    id: 24,
    title: "Cloud Computing Projects for Beginners",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1Ri8f3iL4yRQ3Ukx6hNT7aEdjdOUfWYx3/view?usp=sharing",
    description:
      "Learned to build beginner-friendly cloud computing projects while applying core cloud services, deployment, and infrastructure concepts.",
    skills: [
        "Cloud Computing",
        "Cloud Deployment",
        "Cloud Infrastructure",
        "AWS Basics",
        "Project Development"
    ],
  },
  {
    id: 25,
    title: "CSS Tutorial",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1ujA9PkMSzl9hzsGAvKRMKvISbRfSyqHp/view?usp=sharing",
    description:
      "Learned the fundamentals of CSS, including styling web pages, layouts, animations, and responsive design techniques.",
    skills: [
        "CSS3",
        "Responsive Web Design",
        "Flexbox",
        "CSS Grid",
        "CSS Animations"
    ],
  },
  {
    id: 26,
    title: "Cyber Security For Leadership",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1BOsRRgkzsV-ZFmshB3IgaWo_CQNVyRIg/view?usp=sharing",
    description:
      "Learned the fundamentals of cybersecurity leadership, including risk management, security governance, and strategic decision-making for organizations.",
    skills: [
        "Cybersecurity Leadership",
        "Risk Management",
        "Security Governance",
        "Cyber Risk Assessment",
        "Security Strategy"
    ],
  },
  {
    id: 27,
    title: "Ecommerce Website with HTML & CSS",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1y4vFAwf8NngM4OCFnFCSgw1sQzn8VIEQ/view?usp=sharing",
    description:
      "Built a responsive eCommerce website using HTML and CSS, focusing on modern layouts, styling, and user-friendly design.",
    skills: [
        "HTML5",
        "CSS3",
        "Responsive Web Design",
        "Flexbox & CSS Grid",
        "Frontend Development"
    ],
  },
  {
    id: 28,
    title: "HTML Tutorial",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1XJl6MLKrfrwQOCc9fTLQZoWuaUPV2MIk/view?usp=sharing",
    description:
      "Learned the fundamentals of HTML5, including semantic markup, forms, multimedia, and creating structured web pages.",
    skills: [
        "HTML5",
        "Semantic HTML",
        "Web Page Structure",
        "Forms & Input Elements",
        "Accessibility"
    ],
  },
  {
    id: 29,
    title: "Machine Translation",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/14gG8us7OZwUNglnI6mN2BM7VWCG5h2zO/view?usp=sharing",
    description:
      "Learned the fundamentals of machine translation, including natural language processing, language models, and automated text translation techniques.",
    skills: [
        "Machine Translation",
        "Natural Language Processing (NLP)",
        "Language Models",
        "Text Processing",
        "Artificial Intelligence"
    ],
  },
  {
    id: 30,
    title: "Introduction to Neural Networks and Deep Learning",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1wij2tq92d_Jats4AkIMiqHLiEuS74kdy/view?usp=sharing",
    description:
      "Learned the fundamentals of neural networks and deep learning, including model architecture, training techniques, and AI-driven prediction concepts.",
    skills: [
        "Neural Networks",
        "Deep Learning",
        "Machine Learning",
        "Model Training",
        "Artificial Intelligence"
    ],
  },
  {
    id: 31,
    title: "MEAN Stack Fundamentals",
    issuer: "Great Learning",
    date: "",
    link: "https://drive.google.com/file/d/1Omvkq-oi2dN9zTxa2cNhbfGjosh6l4Mo/view?usp=sharing",
    description:
      "Learned the fundamentals of the MEAN stack, including building full-stack web applications using MongoDB, Express.js, Angular, and Node.js.",
    skills: [
        "MongoDB",
        "Express.js",
        "Angular",
        "Node.js",
        "Full-Stack Development"
    ],
  },
  {
    id: 32,
    title: "SQL for Data Science",
    issuer: "Great Learning",
    date: "o",
    link: "https://drive.google.com/file/d/1RyZioA3Olq79z3fHqiabB58SAbeEb-JT/view?usp=sharing",
    description:
      "Learned SQL fundamentals for data science, including querying, filtering, aggregating, and analyzing data from relational databases.",
    skills: [
        "SQL",
        "Data Analysis",
        "Database Querying",
        "Data Manipulation",
        "Relational Databases"
    ],
  },

];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-transform"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
