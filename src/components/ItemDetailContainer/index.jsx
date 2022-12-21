import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

/* const libro = {
    id: 1,
    titulo: "Tormenta de Espadas",
    autor: "George RR Martin",
    paginas: 1200,
    precio: 9000,
    imagen: "https://contentv2.tap-commerce.com/cover/large/9789506442415_1.jpg?id_com=1113",
}; */

const libros = [
  {
    id: 1,
    titulo: "Tormenta de Espadas",
    autor: "George RR Martin",
    paginas: 1200,
    categoria: "fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442415_1.jpg?id_com=1113",
  },
  {
    id: 2,
    titulo: "Festin de Cuervos",
    autor: "George RR Martin",
    paginas: 850,
    categoria: "fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442477_1.jpg?id_com=1113",
  },
  {
    id: 3,
    titulo: "Danza de Dragones",
    autor: "George RR Martin",
    paginas: 1100,
    categoria: "fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/original/9789506442545_1.jpg?id_com=1165",
  },
];

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise( resolve => {
          setTimeout(() => {
            resolve(libros); 
          }, 2000);
          });

        getData.then( res => setData(res.find(ejemplar => ejemplar.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;