import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";

const libros = [
  {
    id: 1,
    titulo: "Tormenta de Espadas",
    autor: "George RR Martin",
    paginas: 1200,
    categoria: "Fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442415_1.jpg?id_com=1113",
  },
  {
    id: 2,
    titulo: "Festin de Cuervos",
    autor: "George RR Martin",
    paginas: 850,
    categoria: "Fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/large/9789506442477_1.jpg?id_com=1113",
  },
  {
    id: 3,
    titulo: "Danza de Dragones",
    autor: "George RR Martin",
    paginas: 1100,
    categoria: "Fantasia",
    stock: 10,
    img: "https://contentv2.tap-commerce.com/cover/original/9789506442545_1.jpg?id_com=1165",
  },
];


export const ItemListContainer = (cantidad) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise( resolve => {
          setTimeout(() => {
            resolve(libros); 
          }, 2000);
          });
        
          if (categoriaId) {
            getData.then( res => setData(res.filter(ejemplar => ejemplar.categoria === categoriaId)));    
          }
          else{
            getData.then( res => setData(res));
          }
    }, [categoriaId])

/*     const onAdd = () => {
        console.log(`Compraste ${cantidad} productos`);
    } */
    
    return (
    <>
        <h1>Bienvenidos A Jekyll Books</h1>
        <ItemList data={data}/>
    </>
    );
}


export default ItemListContainer;