import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

export const Cart = () => {

    const {cart, totalPrice} = useCartContext();
     
    if (cart.length === 0){
        return(
            <>
            <p>No hay articulos en el carrito</p>
            <Link to={"/"}>Quiero comprar</Link>
            </>
        );
    }
 
    return (
    <>
        {
           cart.map( product => <ItemCart key={product.id} product={product}/> )
        }
        <p>Total Carrito: {totalPrice()}</p>
    </>
    )
}

export default Cart;
