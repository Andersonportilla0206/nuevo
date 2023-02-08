import './App.css';
import Boton from  './componentes/Boton';
import Contador from './componentes/contador';
import logoidp from './imagenes/logo-idp.png';
import { useState } from 'react';


function App() {

    const [numeroDeClic, setNumClic] = useState(0);


    const manejarClic = () => {
       setNumClic(numeroDeClic + 1);
    }


    const reiniciarContador = () => {
       setNumClic(0);
    }


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
        className='logo-idp'
        src={logoidp}
        alt='logo de Idp' />
      </div>

      <div className='contenedor-principal'>
        <Contador numeroDeClic={numeroDeClic} />
        <Boton 
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

        <Boton 
        texto='reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
