import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url:string){
    const [gameData,setGameData]=useState()

    useEffect(()=>{
        axios.get(url)
        .then((res)=>setGameData(res.data))
        .catch((error)=>console.log(error))
    },[url])

    return [gameData,setGameData]
}