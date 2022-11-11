import './app.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
    return (
        <div>
            <NavBar/>
            <ItemListContainer texto='¡Bienvenido!'/>
            <br></br>
            <br></br>
            <div className='cajita'>
                <h1>Ups! Página en construcción.</h1>
                <p>Disculpe las molestias.</p>
            </div>
        </div>
    )
}

export default App