import React from "react";
import { useCartContext } from "../Context/CartContext";

export const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.img} alt={product.titulo} />
            <div>
                <p>Titulo: {product.titulo}</p>
                <p>Autor: {product.autor}</p>
                <p>Precio: {product.precio}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div> 
        </div>
    )
}

export default ItemCart;