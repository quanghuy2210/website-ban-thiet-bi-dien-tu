import React from "react";
import {ListProductWrapper} from './style'
import ProductItem from "./ProductItem";

const ListProduct = ({productArray, hadleAddProduct}) =>{
    return (
        <ListProductWrapper>
            {productArray.map(item => {
                return <ProductItem key={item.id} item={item} hadleAddProduct={hadleAddProduct} />
            })}
        </ListProductWrapper>
    )
}

export default ListProduct