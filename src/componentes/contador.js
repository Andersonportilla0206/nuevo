import React from 'react';
import '../hojas-de-estilo/contador.css';

function Contador ({ numeroDeClic }) {
    return(
        <div className='contador'>
            {numeroDeClic}
        </div>
    )
}

export default Contador;
