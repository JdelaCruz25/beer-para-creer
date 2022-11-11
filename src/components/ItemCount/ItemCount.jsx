import './itemCount.css';
import React,{useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setCount]=useState(parseInt(initial))

    const decremento = () => {
        setCount(contador-1);
    }

    const incremento = () => {
        setCount(contador+1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='count'>
            <button disabled={contador <=1} onClick={decremento}>-</button>
            <span className='countItem'>{contador}</span>
            <button disabled={contador >= stock} onClick={incremento}>+</button>
            <div className='countItem'>
                <button disabled={stock<=0} onClick={() => onAdd(contador)}>Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;