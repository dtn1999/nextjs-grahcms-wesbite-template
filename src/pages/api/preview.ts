import { createHygraphClient } from '@/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import {  GET_Page_BY_ID } from '@/lib/requests/layout';


const previewToken = String(process.env.NEXT_PREVIEW_TOKEN)

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const {id, secret, typename} = req.query;
    if(secret !== previewToken || !id){
        return res.status(401).json({message: "Invalid token"})
    }
    const hygraph = createHygraphClient(true)
    
    let query:string;
    if(typename === "Container"){
        query = GET_Page_BY_ID
    }else if ( typename === "Page"){
        query = GET_Page_BY_ID
    }else {
        return res.status(422).json({message:  `Component of Type ${typename} cannot be preview`})
    }
    
    const {data} = await hygraph.request(query, {id})
    
    console.log(data)

    if(!data){
        return res.status(400).json({message: `No item found with the given id (${ id })`})
    }
    res.setPreviewData({
        typename,
        id: data.id
    })
    res.redirect(`/preview`)
}