import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    console.log("Carrito: ", cart);

    const addProduct = (item, quantity) => {
        if (IsInCart(item.id)) {
            setCart(cart.map( product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            } ));
        }
        else{
            setCart( [...cart, { ...item, quantity}] );
        }
    }
    
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProduct = () => cart.reduce((acum, prodActual) => acum + prodActual.quantity, 0);


    const cleanCart = () => setCart([]);

    const IsInCart = (id) => cart.find( product => product.id === id ) ? true : false; 

    const removeProduct = (id) => setCart( cart.filter( product => product.id !== id) );

    return (
        <CartContext.Provider value={ {cleanCart, IsInCart, removeProduct, addProduct, totalPrice, totalProduct, cart} }>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;