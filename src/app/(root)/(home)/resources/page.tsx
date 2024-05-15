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
    name: 'HTML Fundamentals',
    description: 'Learn the building blocks of web development with HTML.',
    imageUrl: '/resources/html.png',
    category: 'frontend',
  },
  {
    id: 2,
    name: 'Advanced CSS',
    description: 'Style beautiful websites with advanced CSS techniques.',
    imageUrl: '/resources/css.png',
    category: 'frontend',
  },

  {
    id: 21,
    name: 'Javascript',
    description: 'programming beautiful websites with advanced CSS techniques.',
    imageUrl: '/resources/javascript.png',
    category: 'frontend',
  },
  {
    id: 3,
    name: 'Bootstrap Essentials',
    description: 'Create responsive layouts with the Bootstrap framework.',
    imageUrl: '/resources/bootstrap.png',
    category: 'frontend',
  },
  {
    id: 4,
    name: 'Sass Styling',
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
  const filteredCourses = coursesData.filter((course) =>
    filter === 'all' ? true : course.category === filter
  );

  return (
    <div className="container mx-auto p-4 mt-[160px]">
      <div className="flex gap-4 mb-4">
        {/* Category filters */}
        <button onClick={() => setFilter('all')} className="gradient_blue-purple whitespace-nowrap rounded-lg px-8 py-2.5 capitalize">All</button>
        <button onClick={() => setFilter('frontend')} className="text-white">Frontend</button>
        <button onClick={() => setFilter('backend')} className="text-white">Backend</button>
        {/* Add more categories as needed */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map through the filtered courses and display each course */}
        {filteredCourses.map((course) => (
          <div key={course.id} className="card">
            <Link href={`/courses/${course.id}`} className='box bg-[#0a030318] rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 grid  grid-cols-1
                 max-md:grid-cols-1 focus:bg-[#111]'>
              
                <div className="relative h-60">
                  <Image
                    src={course.imageUrl}
                    alt={course.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-1xl font-bold text-white-500">{course.name}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
