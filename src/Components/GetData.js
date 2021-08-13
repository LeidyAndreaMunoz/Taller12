import React, {useEffect, useMemo, useState} from 'react';

export const GetData = async (search) => {
    let urlAPI 
        if (search===undefined) {
            urlAPI= 'https://swapi.dev/api/people/'
        } else {
            urlAPI= `https://swapi.dev/api/people/?search=${search}`
        };
    try{
        const response = await fetch(urlAPI);
        const data = await response.json();
        return data;  
    }
    catch(error) {
        console.error('Error get Data', error);
    }    
}
