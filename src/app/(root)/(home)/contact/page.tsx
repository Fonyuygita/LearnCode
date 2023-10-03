"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation';

const ContactPage = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    name: '',
    topic: '',
    message: '',
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
  
    // Send email using EmailJS
    emailjs
      .send(
        "service_wzlow5b",
        "template_teu4p9n",
        {
          name: formData.name,
          topic: formData.topic,
          message: formData.message,
        },
        '6g3n1zVcflVji4WB-'
      )
      .then(() => {
        // Reset form data
        setFormData({
          name: '',
          topic: '',
          message: '',
        });
  
        // Show success notification
        // showNotification('Email sent successfully!');
        toast.success("Thanks for your message");
        router.push("/")

      })
      .catch((error:string) => {
        // Show error notification
        // showNotification('Failed to send email. Please try again later.');
        toast.success("Thanks for your message");
        setFormData({
          name: '',
          topic: '',
          message: '',
        });
       
        router.push("/")
           
        
      });
  };
  

  return (
    <div className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col h-screen flex-center">
    <div className="flex flex-col md:flex-row max-md:my-5">
      {/* Left section with contact details */}
      <div className="bg-gray-900 text-white p-8 md:w-1/2"  style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <div className="max-mid:hidden flex items-center mb-4 justify-between gap-3 ">
        <Link href="/">
                  <Image src="/logoo.png" alt="logo" width={80} height={70} className="border border-white border-[50%] rounded-full" />
                </Link>



                <Link href="#" className='text-gradient_blue-purple '>WWW.learnCode.com</Link>
          
        </div>
        <p className="mb-4 max-md:hidden">Phone: +237 672 792 563</p>
        <p className="mb-4 max-md:hidden">Bamenda, Cameroon</p>
        {/* Additional contact details */}
<div className="max-md:hidden p-3 w-full flex items-center  justify-center">
<Link href="/">
                  <Image src="/logoo.png" alt="logo" width={80} height={70} className="border border-white border-[50%] rounded-full" />
                </Link>



</div>

      </div>

      {/* Right section with contact form */}
      <div className="bg-white p-8 md:w-1/2 max-md:mb-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2"
              placeholder="Enter your name"
              onChange={(e) =>
               setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="topic" className="block mb-2 font-bold">
              Topic
            </label>
            <select
              id="topic"
              className="w-full border border-gray-300 p-2"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            >
              <option value="A levels C programming">A levels C programming</option>
              <option value="FrontEnd Developement">FrontEnd Developement</option>
              <option value="Backend Developement">Backend Developement</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Mobile App Developemen">Mobile App Developemen</option>

              {/* Add topic options */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-2"
              rows={4}
              placeholder="Enter your message"
              onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;