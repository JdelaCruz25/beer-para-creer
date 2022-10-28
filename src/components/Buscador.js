function Buscador () {
    return (

        <input id="buscado" onChange={(e)=>{
            console.log(e.target.value)
        }} value="Buscar..."></input>
    )
}


export default Buscador;