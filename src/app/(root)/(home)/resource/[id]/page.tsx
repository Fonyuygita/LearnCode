

import React from 'react';

import ResourceCart from '@/components/ResourseCart';
import { getResources } from '../../../../../../sanity/actions';
import { PortableTextInput, PortableTextBlock } from 'sanity';
import { PortableText } from "@portabletext/react";
import PortableTextWithStyles from '@/components/PortableText';
import Image from 'next/image';
import Link from 'next/link';
// import { getOneResource, getResources } from '../../../../../../sanity/actions';


interface Resource {
  _id: string;
  title: string;
  content: PortableTextBlock[];
}

const ResourcePage = async ({ params }: { params: { id: string } }) => {

  const { id } = params;
  const resources = await getResources({
    query: '',
    category: '',
    page: '1',
    id: id,

  })
  console.log("result phg")
  console.log(resources)




  // const getResource= await getOneResource(id);
  // console.log("result is " + getResource)
  // console.log(id)
  return (

    <div className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">


      {resources?.map((resource: any) => (
        <div className="w-full  text-gray-300" key={resource._id}>

          <div className="p-6 mt-3 flex flex-col flex-center justify-center gap-6 md:flex-row  sm:flex-row-reverse">
            {/* <PortableTextBlock value={resource.content} components={{}}/> */}

            <div className="md:p-6 mt-3 py-6 w-full text-left text-sm  md:text-lg">
              <h1 className='  font-bold text-center !text-2xl my-3'>What You'll <span className='text-gradient_blue-purple text-2xl'>Learn Here</span></h1>
              <PortableTextWithStyles value={resource.content} />
              {/* about leran code */}
              <div className="flex flex-col justify-between gap-3 mt-3.5 md:flex-row">

<Link href="#" className='bg-purple whitespace-nowrap rounded-lg px-5 py-2.5 capitalize text-center '>Read Blog</Link>

                <div className="flex flex-center justify-between gap-3">
                <Link href="/">
                  <Image src="/logoo.png" alt="logo" width={60} height={50} className="border border-white border-[50%] rounded-full" />
                </Link>



                <Link href="#" className='text-gradient_blue-purple '>WWW.learnCode.com</Link>
                </div>
               





              </div>


            </div>

            <div className="w-full md:w-[50%] p-6  box bg-[#333] rounded-lg shadow-lg  hover:shadow-xl transition-all duration-100">
              <ResourceCart
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                slug={resource.slug.current}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              //   downloadLink={resource.loadLink}
              />
            </div>
          </div>


        </div>
      ))}

    </div>
  )
}

export default ResourcePage