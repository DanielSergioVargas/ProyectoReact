import "./item.css";
import React from "react";
import { Link } from "react-router-dom";

export const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="itemLibros">
            <img src={info.img} alt="Imagen Libros"/>
            <p>{info.titulo}</p>
            <p>{info.autor}</p>
        </Link>
    );
}

export default Item;