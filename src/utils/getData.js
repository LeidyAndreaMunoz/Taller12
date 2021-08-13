import { useEffect } from "react";

export const GetData=()=>{
    const API='';
    useEffect(()=>{
        fetch(API).then(response=>response.json()).then(data=>console.log(data))
    },[])
}