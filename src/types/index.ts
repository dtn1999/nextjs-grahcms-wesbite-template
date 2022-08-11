import React from "react";
import { Asset } from "./graphql";

export interface BaseProps{
    className?: string;
    children?: React.ReactNode
}

export interface TAsset extends Pick<Asset,"url" | "width" | "height" | "size">{
   id?:string;
   alt?:string;
}