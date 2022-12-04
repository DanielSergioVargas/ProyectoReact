import React from "react";

export const ItemDetail = ({data}) => {
    return (
        <div className="card">
            <div className="detalle">
                <img className="detalle__img" src={data.imagen} alt="Detalles del ejemplar"/>
                <div className="detalle__info">
                    <p>{data.titulo}</p>
                    <p>{data.autor}</p>
                    <p>{data.paginas}</p>
                    <p>{data.precio}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;