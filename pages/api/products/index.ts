import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../db";



export default async function handler(req: NextApiRequest, res: NextApiResponse){
   
    const productsre = products 
    res.status(200).json(productsre)
}