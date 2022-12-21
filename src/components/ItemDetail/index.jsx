import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount";

export const ItemDetail = ({data}) => {

    const [ToCart, setToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (cantidad) => {
        setToCart(true);
        addProduct(data, cantidad);
    }

    return (
        <div className="card">
            <div className="detalle">
                <img className="detalle__img" src={data.img} alt="Detalles del ejemplar"/>
                <div className="detalle__info">
                    <p>{data.titulo}</p>
                    <p>{data.autor}</p>
                    <p>{data.paginas}</p>
                    <p>{data.precio}</p>
                    {
                        ToCart
                        ?<Link to={"/cart"}>Finalizar Compra</Link>
                        :<ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;