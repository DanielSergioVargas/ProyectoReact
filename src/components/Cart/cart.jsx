import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {

    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: "Daniel",
            email: "Daniel@gmail.com",
            phone: "1234567890",
            adress: "asdd"
        },
        items: cart.map(product => ({ id: product.id, titulo: product.titulo, precio: product.precio})),
        total: totalPrice(),
    }

    const handleCLick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then( ({id}) => console.log(id));
    }
     
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
        <p>Total Carrito: ${totalPrice()}</p>
        <button onClick={handleCLick}>Emitir Compra</button>
    </>
    )
}

export default Cart;
