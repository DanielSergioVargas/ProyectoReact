import React from "react";

export const ItemDetail = ({data}) => {
    return (
        <div className="card">
            <div className="detalle">
                <img className="detalle__img" src={data.imagen} alt="Detalles del ejemplar"/>
                <div className="detalle__info">
                    <h1>{data.titulo}</h1>
                    <h1>{data.autor}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;