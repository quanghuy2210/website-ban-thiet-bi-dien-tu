import React from "react";
import {ListProductCartWrapper} from './style'
import ProductCartItem from "./ProductCartItem";

const ListProductCart = ({listCart,handleIncrementProduct,handleDecrementProduct,handleDelete}) => {
    return (
        <ListProductCartWrapper>
            {
                            listCart.length ? listCart.map(item => {
                                    return (
                                        <ProductCartItem key={item.id} item={item} handleIncrementProduct={handleIncrementProduct} handleDecrementProduct={handleDecrementProduct}  handleDelete={handleDelete} />
                                    )
                                }) : <h1>CHƯA CÓ SẢN PHẨM TRONG GIỎ HÀNG</h1>
                        }
        </ListProductCartWrapper>
    )
}

export default ListProductCart