"use client"

// pages/index.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the course type
type Course = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
};


const coursesData: Course[] = [
  {
    id: 1,
    name: 'Introduction to HTML',
    description: 'Learn the building blocks of web development with HTML.',
    imageUrl: '/resources/html.png',
    category: 'frontend',
  },
  {
    id: 2,
    name: 'Intermediate HTML',
    description: 'Style beautiful websites with advanced CSS techniques.',
    imageUrl: '/resources/css.png',
    category: 'frontend',
  },

  {
    id: 21,
    name: 'Advance Html',
    description: 'programming beautiful websites with advanced CSS techniques.',
    imageUrl: '/resources/javascript.png',
    category: 'frontend',
  },
  {
    id: 3,
    name: 'CSS',
    description: 'Create responsive layouts with the Bootstrap framework.',
    imageUrl: '/resources/bootstrap.png',
    category: 'frontend',
  },
  {
    id: 4,
    name: 'Beginner level Javascript',
    description: 'Preprocess your CSS with powerful Sass features.',
    imageUrl: '/resources/sass.png',
    category: 'frontend',
  },
  {
    id: 5,
    name: 'Node.js Basics',
    description: 'Build scalable backend applications with Node.js.',
    imageUrl: '/resources/node.png',
    category: 'backend',
  },
  {
    id: 6,
    name: 'Express in Action',
    description: 'Learn to build web applications with the Express framework.',
    imageUrl: '/resources/express.png',
    category: 'backend',
  },
  {
    id: 7,
    name: 'MongoDB Mastery',
    description: 'Master NoSQL databases with MongoDB.',
    imageUrl: '/resources/mongo.png',
    category: 'backend',
  },
  {
    id: 8,
    name: 'TypeScript Techniques',
    description: 'Enhance your JavaScript with TypeScript.',
    imageUrl: '/resources/typescript.png',
    category: 'frontend',
  },
  {
    id: 9,
    name: 'MySQL Database Design',
    description: 'Design and manage databases with MySQL.',
    imageUrl: '/resources/msql.png',
    category: 'backend',
  },
  {
    id: 10,
    name: 'Mastering PostgreSQL',
    description: 'Develop robust databases with PostgreSQL.',
    imageUrl: '/img.png',
    category: 'backend',
  }
];




const Home: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const [isActtive, setIsActive]=useState(false)

  const handleActive=()=>{
    setIsActive(true)
  }
  
  

  // Filter courses based on the category


  return (
    <div className="container mx-auto p-4 mt-[160px]">
      <div className="flex gap-4 mb-4">
        {/* Category filters */}
        
        {/* Add more categories as needed */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4">
        {/* Map through the filtered courses and display each course */}
        {coursesData.map((course) => (
          <div key={course.id} className="card">
            <div className='box bg-[#0a030318] rounded-lg shadow-lg cursor-pointer hover:shadow-xl p-6 transition-all duration-100 grid  grid-cols-1
                 max-md:grid-cols-1 focus:bg-[#111]'>
              
                <div className="relative h-60">
                  <Image
                    src="/download.png"
                    alt={course.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
          <h3 className='mt-2 text-[#999] body-semibold gap-1.5 '>{course.name}</h3>

                <a href="/downloads/1.0 introduction.rar" download  className="flex-between text-gradient_purple-blue body-semibold gap-1.5 mt-5">
            Download resources
            <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow"  />
          </a>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
