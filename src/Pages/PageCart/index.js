import React,{useEffect} from "react";
import Cart from "../../Components/Cart";

const PageCart = ({listCart,handleIncrementProduct,handleDecrementProduct, handleDelete}) => {
    useEffect(() => {
        document.title = "Giỏ hàng"
      }, [])
    return (
        <Cart listCart={listCart} handleIncrementProduct={handleIncrementProduct} handleDecrementProduct={handleDecrementProduct} handleDelete={handleDelete}  />
    )
}

export default PageCart