import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";

/* const libros = [
  {
    id: 1,
    titulo: "Tormenta de Espadas",
    autor: "George RR Martin",
    paginas: 1200,
    precio: 9000,
    categoria: "fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442415_1.jpg?id_com=1113",
  },
  {
    id: 2,
    titulo: "Festin de Cuervos",
    autor: "George RR Martin",
    paginas: 850,
    precio: 9000,
    categoria: "fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442477_1.jpg?id_com=1113",
  },
  {
    id: 3,
    titulo: "Danza de Dragones",
    autor: "George RR Martin",
    paginas: 1100,
    precio: 9000,
    categoria: "fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/original/9789506442545_1.jpg?id_com=1165",
  },
]; */

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const { detalleId } = useParams();

    useEffect(() => {
      const db = getFirestore();
      const queryDoc = doc(db, "libros", detalleId);
      getDoc(queryDoc).then( res => setData( { id: res.id, ...res.data() } ));
    }, [detalleId]);

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;