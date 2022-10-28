import logo from "../img/logo.png";
import Buscador from "./Buscador";
import Boton from "./Boton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import '../style.css'

function NavBar () {
    return (
        <nav className="header">
            <div className="logo-beer">
                <img src={logo} className="img-beer"></img>
            </div>

            <div className="indice">
                <ul>
                    <li className="opciones opcion-cerveza">
                        <a href="#">CERVEZAS</a>
                    </li>

                    <li className="opciones opcion-aguas">
                        <a href="#">AGUAS Y JUGOS</a>
                    </li>

                    <li className="opciones opcion-gaseosas">
                        <a href="#">GASEOSAS</a>
                    </li>

                    <li className="opciones opcion-input">
                        <Buscador/>
                    </li>

                    <li className="opciones opcion-boton">
                        <Boton/>
                    </li>

                    <li className="opciones opcion-cart">
                        <HiOutlineShoppingCart/>
                    </li>   
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;