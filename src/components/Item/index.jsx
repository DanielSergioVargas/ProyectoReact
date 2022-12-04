import "./item.css";
import React from "react";

export const Item = ({info}) => {
    return (
        <a href="" className="itemLibros">
            <img src={info.img} alt="Imagen Libros"/>
            <p>{info.titulo}</p>
            <p>{info.autor}</p>
        </a>
    );
}