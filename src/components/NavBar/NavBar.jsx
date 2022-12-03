import React from 'react'
import logo from "../../img/logo.png";
import Buscador from "../Buscador";
import { HiOutlineShoppingCart } from "react-icons/hi";
import './navBar.css'

const NavBar = (props) => {

    return (
        <nav className="header">
            <div className="logo-beer">
                <img src={logo} className="img-beer"></img>
            </div>
            <div className="indices">
                <ul className="indice1">
                    <li className="opciones opcion-cerveza">
                        <a href="#">CERVEZAS</a>
                    </li>

                    <li className="opciones opcion-aguas">
                        <a href="#">AGUAS Y JUGOS</a>
                    </li>

                    <li className="opciones opcion-gaseosas">
                        <a href="#">GASEOSAS</a>
                    </li>
                </ul>
                <ul className="indice2">
                    
                    <li className="opciones opcion-buscador">
                        <Buscador className="input-b"/>
                    </li>

                    <li className="opciones opcion-cart">
                        <HiOutlineShoppingCart/> 
                    </li>   
                </ul>
            </div>
        </nav>

    );
}

export default NavBar