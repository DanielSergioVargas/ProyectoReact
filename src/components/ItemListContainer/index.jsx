import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";


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