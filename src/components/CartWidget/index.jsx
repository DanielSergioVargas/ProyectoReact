import React from "react";
import { useContext } from "react";

export const CartWidget = () => {

    const {totalProduct} = useContext();
    return (
        <>
        <i className ="bi bi-cart"></i>
        <span>(totalProduct() || "")</span>
        </>
    );
}

export default CartWidget;