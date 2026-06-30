import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Web Store.",
    description:
      "With the use of HTML, JavaScript, SCSS, ReactJS, Strapi, and Stripe Payment Gateway, I have attempted to develop an online shopping website with this code. And managed to make it function. ",
    image: project1,
    github: "https://github.com/SuyogChavan2005/Online-Web-Store.",
    live: "https://online-web-store-suyog-chavans-projects.vercel.app/",
    tags: [
      "HTML5",
      "SCSS",
      "React",
      "Node",
      "JavaScript",
      "Stripe",
      "Strapi",
    ],
  },
  {
    id: 2,
    title: "Online Library Management System.",
    description:
      "Built an online Library Management System using HTML, CSS, JavaScript, and PHP, featuring role-based login, book borrowing, returns, fine tracking, and admin management.",
    image: project2,
    github: "https://github.com/SuyogChavan2005/Online-Library-Management-System.",
    live: "",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "PhpMyAdmin",
      "Bootstrap",
    ],
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Using HTML, CSS, and JavaScript, I have developed a password generator that generates a unique 24-digit password.",
    image: project3,
    github: "https://github.com/SuyogChavan2005/Mini-Project-1-Password-Generator",
    live: "https://mini-projects-password-generator-suyog-chavans-projects.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Simple Calculator",
    description:
      "Using HTML, CSS, and JavaScript, I have developed a simple calculator.",
    image: project4,
    github: "https://github.com/SuyogChavan2005/Mini-Projects-2-Calculator",
    live: "https://mini-projects-2-calculator-suyog-chavans-projects.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 5,
    title: "Student Portfolio",
    description:
      "I created a QR Code Generator that helps create fresh and unique QR codes using HTML, CSS, and JavaScript.",
    image: project5,
    github: "https://github.com/SuyogChavan2005/Mini-Projects-3-QR-Code-Generator",
    live: "https://mini-projects-3-qr-code-generator-suyog-chavans-projects.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
