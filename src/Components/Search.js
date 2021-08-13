import React, { useEffect, useState } from 'react';

export const Search = () => {
    const [ dataApi, setDataApi] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/people/?search=r2').then( response => response.json()).then(data => setDataApi(data))
    },[])

    return (
        <div>
            {dataApi?dataApi.results.map( result => <div>
                <h4>{result.name}</h4>
                <p>{result.films}</p>
            </div>):''}
        </div>
    )
}