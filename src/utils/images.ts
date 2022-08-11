import { TAsset } from "@app/types";
import { UNSPLASH_TOKEN } from "./envVariables";

export type  ImageSize =  "full" | "raw" | "regular" | "small" | "small_s3" | "thumb"

export async function getUnsplashRandomImage(size?:ImageSize):Promise<TAsset>{
   const response = await (await fetch(`https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_TOKEN}`)).json()
   const {id, width, height, alt_description:alt,urls} = response
   const url = urls[size  || "raw"]
   return {
     url ,
     id, 
     width,
     height, 
     alt  
   }
}

export function getPicSumRandomImage(width:number, height:number):TAsset{
  
  return {
    url: `https://picsum.photos/${width || 600}/${height || 600}` ,
    id: "", 
    width,
    height, 
    alt: ""  
  }
}