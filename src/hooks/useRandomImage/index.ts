/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { TAsset } from "@app/types";
import { getRandomPexelsImage, PexelsImageSize } from "@app/utils/images";

export function usePexelsRandomImage(size?: PexelsImageSize){
   const [image, setImage] = React.useState<TAsset>()
   const getImage = React.useCallback(async ()=>{
     const photo =  await getRandomPexelsImage(size)
     setImage(photo)
   }, [])
   React.useEffect(()=> {
     getImage()
  }, [])
   return image
}