import React from "react";
import { useCartContext } from "../Context/CartContext";


export const CartWidget = () => {

    const {totalProduct} = useCartContext();
    
    return (
        <>
        <i className ="bi bi-cart"></i>
        <span>{totalProduct() || ""}</span>
        </>
    );
}

export default CartWidget;