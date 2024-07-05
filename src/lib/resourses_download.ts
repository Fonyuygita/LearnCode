import { title } from "process";

// Define the course

type resourceProps = {
  id: number;
  description: string;
  downloadUrls: string;
  images?: string;
};
type Course = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  resource: resourceProps[];
};

export const coursesData: Course[] = [
  {
    id: 1,
    name: "HTML Fundamentals",
    description: "Learn the building blocks of web development with HTML.",
    imageUrl: "/resources/html.png",
    category: "frontend",
    resource: [
      {
        id: 1,
        description: "Beginner level  HTML",
        downloadUrls: "/downloads/1.0 introduction.rar",
        images: "/download.png",
      },

      {
        id: 2,
        description: "Intermediate   HTML",
        downloadUrls: "/downloads/2.0 intermediate.rar",
        images: "/download.png",
      },

      {
        id: 3,
        description: "Advance level HTML",
        downloadUrls: "/downloads/3.0 advance_html.rar",
        images: "/download.png",
      },

      {
        id: 4,
        description: "Challenges 🤣",
        downloadUrls: "/downloads/4.0 challenges.rar",
        images: "/download.png",
      },
    ],
  },
  {
    id: 2,
    name: "Advanced CSS",
    description: "Style beautiful websites with advanced CSS techniques.",
    imageUrl: "/resources/css.png",
    category: "frontend",
    resource: [
      { id: 1, description: "pending----", downloadUrls: "/patient/" },
    ],
  },

  {
    id: 3,
    name: "Challenge one",
    description: "Challenge 1: (Web design and version  system [git])",
    imageUrl: "/resources/challenge.png",
    category: "challenges",
    resource: [
      {
        id: 1,
        description: "Design Quiz App",
        downloadUrls: "/downloads/1.0 Quiz-app.rar",
        images: "/resources/proj/quiz-app.png",
      },

      {
        id: 2,
        description: "Design Contact Page",
        downloadUrls: "/downloads/2.0 Contact_page_Design.rar",
        images: "/resources/proj/contact_page.png",
      },

      {
        id: 3,
        description: "Design Category section",
        downloadUrls: "/downloads/3.0 Design_category_Section.rar",
        images: "/resources/proj/category_Section_Screenshot.png",
      },

      {
        id: 4,
        description: "Design Hero section of car website",
        downloadUrls: "/downloads/4.0 hero_Section_of_car_website.rar",
        images: "/resources/proj/car_company.png",
      },
      {
        id: 5,
        description: "Animated Neon Card",
        downloadUrls: "/downloads/5.0 Animated_neon_Card.rar",
        images: "/resources/proj/neon.png",
      },

      {
        id: 6,
        description: "Animated Landing Page",
        downloadUrls: "/downloads/6.0 Animated_landing_page.rar",
        images: "/resources/proj/feynman.png",
      },

      {
        id: 7,
        description: "Animated Food Landing Page",
        downloadUrls: "/downloads/8.0 Animated_food_landing_page.rar",
        images: "/resources/proj/resto.png",
      },

      {
        id: 17,
        description: "Animated Garri Landing Page",
        downloadUrls: "/downloads/7.0 Animated_garri_landing_page.rar",
        images: "/resources/proj/garri.png",
      },

      {
        id: 8,
        description: "Tesla website registration page",
        downloadUrls: "/downloads/4.0 challenges.rar",
        images: "/resources/proj/tesla.png",
      },
      {
        id: 9,
        description: "Contribute to this open source project",
        downloadUrls: "/downloads/13.0 Design_btue_interface.rar",
        images: "/resources/proj/btube_screenshot.png",
      },

      {
        id: 10,
        description: "Creativity (Build your own Portfolio site)",
        downloadUrls: "/downloads/2.0 intermediate.rar",
        images: "/resources/proj/portfolio.png",
      },
    ],
  },
  {
    id: 4,
    name: "Javascript",
    description: "programming beautiful websites with advanced CSS techniques.",
    imageUrl: "/resources/javascript.png",
    category: "frontend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },

  {
    id: 5,
    name: "Bootstrap Essentials",
    description: "Create responsive layouts with the Bootstrap framework.",
    imageUrl: "/resources/bootstrap.png",
    category: "frontend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 6,
    name: "Sass Styling",
    description: "Preprocess your CSS with powerful Sass features.",
    imageUrl: "/resources/sass.png",
    category: "frontend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 7,
    name: "Node.js Basics",
    description: "Build scalable backend applications with Node.js.",
    imageUrl: "/resources/node.png",
    category: "backend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 8,
    name: "Express in Action",
    description: "Learn to build web applications with the Express framework.",
    imageUrl: "/resources/express.png",
    category: "backend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 9,
    name: "MongoDB Mastery",
    description: "Master NoSQL databases with MongoDB.",
    imageUrl: "/resources/mongo.png",
    category: "backend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 10,
    name: "TypeScript Techniques",
    description: "Enhance your JavaScript with TypeScript.",
    imageUrl: "/resources/typescript.png",
    category: "frontend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 11,
    name: "MySQL Database Design",
    description: "Design and manage databases with MySQL.",
    imageUrl: "/resources/msql.png",
    category: "backend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
  {
    id: 12,
    name: "Mastering PostgreSQL",
    description: "Develop robust databases with PostgreSQL.",
    imageUrl: "/img.png",
    category: "backend",
    resource: [{ id: 1, description: "pending...", downloadUrls: "/patient/" }],
  },
];
