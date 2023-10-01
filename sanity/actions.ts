import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
  id?:string
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page,id } = params;

  try {
if(id){
  const resource = await readClient.fetch(
    groq`${buildQuery({
      type: 'resource',
      query: '',
      category: '',
      page: parseInt(page),
      id
    })}{
      title,
      _id,
      downloadLink,
      "image": poster.asset->url,
      content,
      views,
      slug,
      category
    }`, {id}
  );

  if (resource) {
    console.log("found")
    return [resource]; // Return the resource in an array if found
  } else {

    console.log("not found")
    return []; // Return an empty array if the resource is not found
  }


}


    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
        
      
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        content,
        views,
        slug,
        category
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}


// export const getOneResource=async(id:string)=>{
//   console.log(id)

//   try{

//     const query=await readClient.fetch(
//     groq`*[_type == "resource" && _id == "${id}"]{
//       title,
//       _id,
//       downloadLink,
//       "image": poster.asset->url,
//       views,
//       slug,
//       category
//     }[0]`)

//     return query

//   }catch(err){
//     console.log(err)
//   }
// }