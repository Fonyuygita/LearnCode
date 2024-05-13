
import Filter from "@/components/Filters"
import SearchForm from "@/components/SearchForm"
import React from "react"
import { getResources, getResourcesPlaylist } from "../../../../sanity/actions"
import ResourceCart from "@/components/ResourseCart"
import Header from "@/components/Header"
import { Metadata } from "next"

export const revalidate = 900;






interface Props{
searchParams : {[key:string] : string | undefined}
}

 const HomePage=async({searchParams}:Props)=>{
  const resourcesPlayList=await getResourcesPlaylist();
    const resources=await getResources({
        query:searchParams?.query || '',
        category:searchParams?.category || '',
        page:'1',
        
    })

return(
    <div className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
        <section className="nav-padding w-full">

            <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
                <h1 className="sm:heading1 heading2 mb-6 text-center text-white ">[Learn Code] With [Mathematics] Resources</h1>
            </div>
            <SearchForm/>
        </section>

        <Filter/>

        
      {(searchParams?.query || searchParams?.category) && (

        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />
            <div className="mt-12 grid w-full grid-cols-4  max-md:grid-cols-1 justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <div className="box bg-[#0a030318] rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 grid  grid-cols-1
                 max-md:grid-cols-1 focus:bg-[#111]">
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
              ))
            ): (
              <p className="body-regular text-white-400">
                No resources found
              </p>
            )}

            </div>
        </section>
        )}
        
         {resourcesPlayList.map((item: any) => (
        <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full grid  grid-cols-3 justify-center gap-16 sm:justify-start max-md:grid-cols-1">
            {item.resources.map((resource: any) => (
                <div className="box bg-[#0a030318]  rounded-lg shadow-2xl  hover:shadow-xl p-6 transition-all duration-100">

                <ResourceCart 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  slug={resource.slug}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}

/>
</div>
              ))}
          </div>
        </section>
      ))} 

    </div>
)
}

export default HomePage