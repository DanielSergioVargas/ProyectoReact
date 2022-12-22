import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";

export const Cart = () => {

    const {cart, totalPrice} = useContext();

    if (cart.lenght === 0){
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
