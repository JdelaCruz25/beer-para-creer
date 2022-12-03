import './app.css'
import NavBar from './components/NavBar/NavBar';
import {Productos} from './components/Productos/Productos';
import {Paginas} from './components/Paginas/Paginas'
import React, {useEffect, useState} from 'react';

const productos = [
    {
        id: 1,
        name: 'Andes IPA Andina 473cm3', 
        price: 1800,
        description: 'Pack por 6 unidades.',
        imageUrl: './img/andes-ipa.jpg'
    }
]


function App() {
    const [showMenu, setShowMenu] = useState (false)
    const [showOrder, setShowOrder] = useState (false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <NavBar showMenu = {showMenu}/>
            <Productos/>
            <Paginas/>
            <br></br>
            <br></br>
            <div className='cajita'>
                <div className='parte1'>
                    <img src="./img/andes-ipa.jpg" alt="" />
                </div>
                <div className='parte2'>Hola 2</div>
            </div>


        </div>


    )
}

export default App