import React, { useEffect, useState } from 'react'; 
import { GetData } from './GetData';


export const Button2 = () => {
    
    
    const showInfo = async () => {
        const info = await GetData()
        console.log(info.results)
    }
    


    return (
        <button onClick={() => showInfo()} >
            Mostrar
        </button>
    )
}