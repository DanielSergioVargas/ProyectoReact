import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const libro = {
    id: 1,
    titulo: "Tormenta de Espadas",
    autor: "George RR Martin",
    paginas: 1200,
    stock: 10,
    imagen: "https://contentv2.tap-commerce.com/cover/large/9789506442415_1.jpg?id_com=1113",
};

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise( resolve => {
          setTimeout(() => {
            resolve(libro); 
          }, 3000);
          });
        getData.then( res => setData(res));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;