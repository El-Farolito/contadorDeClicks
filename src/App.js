import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/logo_large.png'

function App() {

  const manejarCLick = () =>{
  
  }

  const reiniciarContador = () => {
   alert('reinicio')
  }

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>
       <img className='freeCodeCamp-logo' src={freeCodeCampLogo} />
      </div>

      <div className='contenedor-principal'>

          <Contador 
          numeroDeClicks='5'
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
