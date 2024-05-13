"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
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
          className="text-lg text-left mb-8 text-gray-400 sm:text-[17px]"
        >
          LearnCode is a platform dedicated to assisting individuals who have a strong passion for technology, avid readers of books and science fiction, and those preparing for exams. Our primary aim is to provide valuable resources in the form of insightful blog articles and downloadable PDFs.

At LearnCode, we understand the ever-evolving world of technology and the enthusiasm it ignites within individuals. Whether you are a beginner looking to explore the vast realm of coding or an experienced professional seeking to stay updated with the latest trends, our platform is designed to cater to your needs.

We recognize the importance of learning through various mediums, and that's why we offer a diverse range of resources. Our blog section is curated by industry experts who share their knowledge, experiences, and insights, covering a wide array of topics related to coding, technology advancements, and emerging trends. From beginner-friendly tutorials to in-depth analysis of complex concepts, our blog articles are crafted to be informative, engaging, and easily understandable.


        </motion.p>
      </div>

      <div className="flex flex-col items-center mt-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl font-bold mb-4 text-gradient_blue-purple"
        >
          Know more about me:
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex space-x-4"
        >
          <Link href="https://fonyuygita.vercel.app" className="text-blue-500 hover:text-blue-700 flex items-center justify-center gap-2">
          <FaLink />
          <span>portfolio</span>
          </Link>
         
        </motion.div>
      </div>

      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-black-100 rounded-lg p-8 shadow-lg border border-1 border-gray-400"
        >
          <div className="flex items-center mb-4">
            <Image src="/user.png" width={80} height={60} alt="Testimonial Image" className="rounded-full object-content" />
            <div className="ml-4 bg-[#111] p-3 rounded-md shadow-lg p-4 rounded-lg ">
              <h3 className="text-lg font-semibold text-gray-200">Fonyuy Gita</h3>
              <p className="text-gray-300">Founder, LearnCode</p>
            </div>
          </div>
          <p className="text-gray-700">
            "We teach, Inspire, Grow and Build Together the Future....."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;