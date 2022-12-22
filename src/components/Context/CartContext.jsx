import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [Cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = Cart.filter( prod => prod.id !== item.id);
        newCart.push( { ...item, quantity : newQuantity } );
        setCart(newCart);
    }
    
    const totalPrice = () => {
        return Cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProduct = () => Cart.reduce((acum, prodActual) => acum + prodActual.quantity, 0);


    const cleanCart = () => setCart([]);

    const IsInCart = (id) => Cart.find( product => product.id === id ) ? true : false; 

    const removeProduct = (id) => setCart( Cart.filter( product => product.id !== id) );

    return (
        <CartContext.Provider value={ {cleanCart, IsInCart, removeProduct, addProduct, totalPrice, totalProduct, Cart} }>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;