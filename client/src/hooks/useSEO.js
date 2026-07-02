import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://suyog-chavan-portfolio.vercel.app/";

const PAGE_META = {
  "/": {
    title: "Suyog Chavan - Full Stack Developer | MERN Stack Expert",
    description:
      "Suyog Chavan — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Kolkata, India.",
  },
  "/about": {
    title: "About - Suyog Chavan | Full Stack Developer",
    description:
      "Learn about Suyog Chavan — B.Tech Computer Science graduate, Full Stack Developer with 3+ internships and 10+ projects.",
  },
  "/projects": {
    title: "Projects - Suyog Chavan | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Suyog Chavan using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Suyog Chavan | React, Node.js, MERN Stack",
    description:
      "Technical skills of Suyog Chavan — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Suyog Chavan | Full Stack Developer",
    description:
      "Professional experience of Suyog Chavan including internships in full stack web development.",
  },
  "/education": {
    title: "Education - Suyog Chavan | B.Tech Computer Science",
    description:
      "Educational background of Suyog Chavan — B.Tech in Computer Science with 8.48 CGPA.",
  },
  "/certificates": {
    title: "Certificates - Suyog Chavan | Developer Certifications",
    description:
      "Professional certifications and achievements of Suyog Chavan in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Suyog Chavan | Hire a Full Stack Developer",
    description:
      "Get in touch with Suyog Chavan for freelance projects, job opportunities or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Suyog Chavan - Full Stack Developer",
  description:
    "Portfolio of Suyog Chavan — Full Stack Developer specializing in MERN stack.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
