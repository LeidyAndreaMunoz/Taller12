import React, { useEffect, useState  } from 'react';

export const Fetch = () => {
    const [ dataAPI, setDataAPI ] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/people/').then(response => response.json()).then(data => setDataAPI(data))
    }, [])

    return (
        <div>
            {dataAPI?dataAPI.results.map(result => <h4>{result.name}</h4>):''}
        </div>
    )
}