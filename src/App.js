import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';


function App() {

  const [numCLicks, setNumClicks] = useState(0)

  const manejarCLick = () =>{
   setNumClicks(numCLicks + 1) 
  }

  const reiniciarContador = () => {
    setNumClicks(numCLicks - numCLicks) 
  }

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>
       <img className='freeCodeCamp-logo' src={require('./imagenes/logo_large.png') } alt='Lautaro Pedroza Developer' />
      </div>

      <div className='contenedor-principal'>

          <Contador 
          numeroDeClicks={numCLicks}
          />

        <Boton
         texto='Click'
         esBotonDeClick={true}
         manejarClick={manejarCLick}
         /> 
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}
        /> 
      </div>

    </div>
  );
}

export default App;
