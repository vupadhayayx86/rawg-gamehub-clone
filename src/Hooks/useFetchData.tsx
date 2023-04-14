import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";

interface Props{
    id:number,
    background_image:String,
    name:String,
    ratings_count:number,
    metacritic:number,
    rating:String,
    released:String,
    genres:String[],
    
    
}

interface Results{
    results:Props[]
}



export default function useFetchData(url:string){
    const [gameData,setGameData]=useState<any | null>(null)

    useEffect(()=>{
        axios.get<Results>(url)
        .then((res)=>{setGameData(res.data.results)
            console.log(res.data)
        })
        .catch((error)=>console.log(error))
    },[url])
    
    return [gameData,setGameData]
}