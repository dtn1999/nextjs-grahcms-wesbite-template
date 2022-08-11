import { TAsset } from "@app/types";
import { PEXELS_TOKEN } from "./envVariables";
import { createClient , ErrorResponse, Photo} from 'pexels';
const client = createClient(PEXELS_TOKEN);

export type PexelsImageSize = keyof Photo["src"]

export async function getRandomPexelsImage(size?:PexelsImageSize):Promise<TAsset>{
  const result = await client.photos.random()
  const error = (result as ErrorResponse).error;
  
  if(error){
    console.log("something when wrong")
    alert(`Pexels responds with error in usePexelsRandomImage: ${error}`)
    return {
        width: 600,
        height: 600,
        url: "https://picsum.photos/600/600",
        alt: "placeholder image",
        size: 0
    }
  }
  
  const {width, height, url, src, photographer} = (result as Photo);
   return {
    width,
    height,
    alt: `a photo by ${photographer}`,
    url: (size && src[size]) || url,
   }
}