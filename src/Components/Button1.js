import React, { useState } from 'react'; 

export const Button1 = () => {
    const [ addtext, setAddText] = useState('');

    return(
        <div>
            <button onClick={ () => setAddText('Hola') }> Agregar </button>
            <h4> Bienvenido, la página dice {addtext} </h4>
            <button onClick={ () => setAddText('') }> Borrar</button>
        </div>
    )
}