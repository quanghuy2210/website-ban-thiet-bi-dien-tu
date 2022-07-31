import React,{useState} from 'react'
import {CartWrapper} from './style'
import {Link} from 'react-router-dom'
import CartLeft from './CartLeft'
import CartRight from './CartRight'

const Cart  = ({listCart,handleIncrementProduct,handleDecrementProduct,handleDelete}) => {
   
    return (
        <CartWrapper >
                <div className="title_cart-wrapper">
                    <h2>Giỏ hàng của tôi</h2>
                    <Link to='/'>Tiếp tục mua hàng</Link>
                </div>
                <div className="wrapper-cart">
                    <CartLeft listCart={listCart} handleIncrementProduct={handleIncrementProduct} handleDecrementProduct={handleDecrementProduct} handleDelete={handleDelete} />
                    <CartRight />
                </div>
        </CartWrapper>
    )
}

export default Cart