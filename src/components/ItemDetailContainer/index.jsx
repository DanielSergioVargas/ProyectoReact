import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";


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