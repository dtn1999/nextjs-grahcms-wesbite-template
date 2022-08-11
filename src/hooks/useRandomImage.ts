/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { TAsset } from "@app/types";
import { getPicSumRandomImage, getUnsplashRandomImage, ImageSize } from "@app/utils/images";

export function useUnsplashRandomImage(size?:ImageSize){
    const [image, setImage] = React.useState<TAsset>()
    const getImage = React.useCallback(async ()=>{
        const res = await getUnsplashRandomImage(size)
        setImage(res)
    }, [])
    React.useEffect(()=>{
        getImage()
    }, [])
    return image
}


export function usePicSumRandomImage(width:number, height:number){
    const [image, setImage] = React.useState<TAsset>()
    const getImage = React.useCallback(async ()=>{
        const res = await getPicSumRandomImage(width, height)
        setImage(res)
    }, [])
    React.useEffect(()=>{
        getImage()
    }, [])
    return image
}