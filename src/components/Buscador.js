import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
function Buscador () {
    return (
        <div>
            <HiMagnifyingGlass className="logoSearch"/>
            <input id="buscado" onChange={(e)=>{
                console.log(e.target.value)
            }} value="Buscar..."></input>
        </div>
    )
}


export default Buscador;