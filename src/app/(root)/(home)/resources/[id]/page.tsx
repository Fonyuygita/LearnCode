"use client"

// pages/index.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { coursesData } from '@/lib/resourses_download';





const Home: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const params=useParams<{id:string}>()
  const {id}=params

  const convertedId=parseInt(id);



  const [isActtive, setIsActive]=useState(false)

  const handleActive=()=>{
    setIsActive(true)
  }
  
  

  const getCourses=coursesData.find(data=>data.id===convertedId)
  console.log(getCourses);

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
