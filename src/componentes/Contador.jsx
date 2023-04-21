import React from "react";
import '../css/Contador.css'

function Contador ({numeroDeClicks}){
    return ( 
        <div className='contador'>
            {numeroDeClicks}
        </div>
    )
}
export default Contador