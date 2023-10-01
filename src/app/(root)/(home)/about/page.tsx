"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8 flex-center paddings mx-auto w-full max-w-screen-2xl flex-col mt-[125px]">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <Link href="/">
        <Image src="/logoo.png" alt="logo" width={200} height={200} className="border border-white border-[50%] rounded-full"/>
        </Link>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-gradient_blue-purple max-md:text-[22px] max-md:text-center"
        >
          {"Welcome To </LearnCode>"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-left mb-8 text-gray-400"
        >
          LearnCode is a platform dedicated to assisting individuals who have a strong passion for technology, avid readers of books and science fiction, and those preparing for exams. Our primary aim is to provide valuable resources in the form of insightful blog articles and downloadable PDFs.

At LearnCode, we understand the ever-evolving world of technology and the enthusiasm it ignites within individuals. Whether you are a beginner looking to explore the vast realm of coding or an experienced professional seeking to stay updated with the latest trends, our platform is designed to cater to your needs.

We recognize the importance of learning through various mediums, and that's why we offer a diverse range of resources. Our blog section is curated by industry experts who share their knowledge, experiences, and insights, covering a wide array of topics related to coding, technology advancements, and emerging trends. From beginner-friendly tutorials to in-depth analysis of complex concepts, our blog articles are crafted to be informative, engaging, and easily understandable.

For those who prefer a more traditional approach to learning, we provide downloadable PDFs that delve into specific topics in detail. These comprehensive resources serve as valuable references, allowing you to study at your own pace and revisit the content whenever necessary.

At LearnCode, we believe in the power of community and the strength that comes from shared knowledge. We encourage interaction and engagement among our users, fostering a supportive environment where individuals can connect, ask questions, and exchange ideas. Our platform serves as a hub for like-minded individuals to come together, learn from one another, and grow collectively.

Whether you are preparing for exams, seeking to expand your coding skills, or simply exploring the world of technology and science fiction, LearnCode aims to be your trusted companion on your learning journey. Join us today and embark on a fulfilling experience as you unlock the vast potential of the digital world.

        </motion.p>
      </div>

      <div className="flex flex-col items-center mt-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl font-bold mb-4 text-gradient_blue-purple"
        >
          Follow us on social media:
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex space-x-4"
        >
          <Link href="#" className="text-blue-500 hover:text-blue-700">
            <Image src="/background.png" alt='social' width={30} height={30}/>
          </Link>
          <Link href="#" className="text-blue-500 hover:text-blue-700">
          <Image src="/background.png" alt='social' width={30} height={30}/>
            
          </Link>
          <Link href="#" className="text-blue-500 hover:text-blue-700">
          <Image src="/background.png" alt='social' width={30} height={30}/>
            
          </Link>
        </motion.div>
      </div>

      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-[#222] rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Image src="/jude.png" width={80} height={60} alt="Testimonial Image" className="rounded-full object-content" />
            <div className="ml-4 bg-[#111] p-3 rounded-md shadow-lg p-4 rounded-lg ">
              <h3 className="text-lg font-semibold text-gray-200">Fonyuy Gita</h3>
              <p className="text-gray-300">Founder, LearnCode</p>
            </div>
          </div>
          <p className="text-gray-700">
            "W teach, Inspire, Grow and Build Together the Future....."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;