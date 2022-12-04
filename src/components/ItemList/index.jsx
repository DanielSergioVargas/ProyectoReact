import React from "react";
import { Item } from "../Item";

export const ItemList = ({data = []}) => {
    return (
        data.map(libro => <Item key={libro.id} info={libro}/>)
    );
}

export default ItemList;