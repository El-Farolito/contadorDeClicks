import React from "react";
import '../css/Contador.css'

function Contador ({numeroDeClicks}){
    return ( 
        <div className='contador'>
            <p>{numeroDeClicks}</p>
        </div>
    )
}
export default Contador