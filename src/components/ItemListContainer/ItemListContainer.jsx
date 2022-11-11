import React from 'react';
import Title from '../Title/Title';
import ItemCount from '../ItemCount/ItemCount';

const imgs = [
    {id: 0, image: "https://gobar.vteximg.com.br/arquivos/ids/157473-1000-1000/Andes-Origen-IPA.jpg?v=637218864324070000", title:"IPA Andina"},
    {id: 1, image: "https://http2.mlstatic.com/D_NQ_NP_673031-MLA44839749297_022021-O.webp", title: "Negra"},
    {id: 2, image: "https://www.espaciovino.com.ar/media/default/0001/65/thumb_64125_default_medium.jpeg", title: "IPA Roja"},
    {id: 3, image: "https://lacumbretienda.com.ar/wp-content/uploads/2021/03/Andes-Rubia-473ml-1.jpg", title: "Rubia"},

];

export const ItemListContainer = ({texto}) => {

    const onAdd = (cantidad) => {
        console.log(`${cantidad} productos agregados al carrito`);
    }

    return (
        <>
        <Title greeting = {texto}/>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;