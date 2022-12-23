import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";

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


export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const {categoriaId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "libros");
    if (categoriaId) {
      const queryFilter = query(itemCollection, where("categoria", "==", categoriaId));
      getDocs(queryFilter).then( res => setData( res.docs.map( product => ( { id: product.id, ...product.data() } ) ) ) );
    }
    else{
      getDocs(itemCollection).then( res => setData( res.docs.map( product => ( { id: product.id, ...product.data() } ) ) ) );

    }
    

    
        
 /*           if (categoriaId) {
            getData.then( res => setData(res.filter(ejemplar => ejemplar.categoria === categoriaId)));    
          }
          else{
            getData.then( res => setData(res));
          } */
  }, [categoriaId])
    
  return (
  <>
    <h1>Bienvenidos A Jekyll Books</h1>
    <ItemList data={data}/>
  </>
  );
}


export default ItemListContainer;