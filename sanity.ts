import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'



export const config ={
 dataset :"production",
projectId:"sogm1voo",
apiVersion : "2023-03-03", 
useCdn: process.env.NODE_ENV == "production"
}
export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
createImageUrlBuilder(config).image(source);
