"use client"

// pages/index.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { coursesData } from '@/lib/resourses_download';








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
            <Link href={`/resources/${course.id}`} className='box bg-[#0a030318] rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 grid  grid-cols-1
                 max-md:grid-cols-1 focus:bg-[#111]'>
              
                <div className="relative h-60 max-md:h-20">
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
