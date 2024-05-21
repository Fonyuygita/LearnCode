import { title } from "process";

// Define the course 

type resourceProps={
id:number;
  description:string;
  downloadUrls:string;
 

}
type Course = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    resource:resourceProps[]
  };
  
  
export  const coursesData: Course[] = [
    {
      id: 1,
      name: 'HTML Fundamentals',
      description: 'Learn the building blocks of web development with HTML.',
      imageUrl: '/resources/html.png',
      category: 'frontend',
      resource:[
        {
          id:1,
         description:"Beginner level  HTML",
         downloadUrls:"/downloads/1.0 introduction.rar",
        },

        {
          id:2,
          description:"Intermediate   HTML",
          downloadUrls:"/downloads/2.0 intermediate.rar",
         },

         {
          id:3,
          description:"Advance level HTML",
          downloadUrls:"/downloads/3.0 advance_html.rar",
         },

         
         {
          id:4,
          description:"Challenges 🤣",
          downloadUrls:"/downloads/4.0 challenges.rar",
         }
      ]
    },
    {
      id: 2,
      name: 'Advanced CSS',
      description: 'Style beautiful websites with advanced CSS techniques.',
      imageUrl: '/resources/css.png',
      category: 'frontend',
      resource:[

        {id:1,
          description:"pending----",
          downloadUrls:"/patient/",
         }
        
      ]
    },
  
    {
      id: 21,
      name: 'Javascript',
      description: 'programming beautiful websites with advanced CSS techniques.',
      imageUrl: '/resources/javascript.png',
      category: 'frontend',
      resource:[
      
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 3,
      name: 'Bootstrap Essentials',
      description: 'Create responsive layouts with the Bootstrap framework.',
      imageUrl: '/resources/bootstrap.png',
      category: 'frontend',
      resource:[
       
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 4,
      name: 'Sass Styling',
      description: 'Preprocess your CSS with powerful Sass features.',
      imageUrl: '/resources/sass.png',
      category: 'frontend',
      resource:[
       
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 5,
      name: 'Node.js Basics',
      description: 'Build scalable backend applications with Node.js.',
      imageUrl: '/resources/node.png',
      category: 'backend',
      resource:[
       
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 6,
      name: 'Express in Action',
      description: 'Learn to build web applications with the Express framework.',
      imageUrl: '/resources/express.png',
      category: 'backend',
      resource:[
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 7,
      name: 'MongoDB Mastery',
      description: 'Master NoSQL databases with MongoDB.',
      imageUrl: '/resources/mongo.png',
      category: 'backend',
      resource:[
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 8,
      name: 'TypeScript Techniques',
      description: 'Enhance your JavaScript with TypeScript.',
      imageUrl: '/resources/typescript.png',
      category: 'frontend',
      resource:[
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 9,
      name: 'MySQL Database Design',
      description: 'Design and manage databases with MySQL.',
      imageUrl: '/resources/msql.png',
      category: 'backend',
      resource:[
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    },
    {
      id: 10,
      name: 'Mastering PostgreSQL',
      description: 'Develop robust databases with PostgreSQL.',
      imageUrl: '/img.png',
      category: 'backend',
      resource:[
        {id:1,
          description:"pending...",
          downloadUrls:"/patient/",
         }
      ]
    }
  ];
  