import React from "react";
import {Link} from 'react-router-dom'
import {ProductCartItemWrapper} from './style'

const ProductCartItem = ({item,handleIncrementProduct,handleDecrementProduct,handleDelete}) => {
    const {id,image,title,price, quantity} = item
    const sumPrice = price.priceLast * quantity
    return (
        <ProductCartItemWrapper>
            <div className="name-product">
                    <Link to={`/detail/${id}`} className="image_product-cart">
                            <img src={image.src} alt={image.alt} />
                    </Link>
                    <div className="name_product-cart">
                        <h3>
                            <Link to={`/detail/${id}`}>
                                {title}
                            </Link>
                        </h3>
                        <div className="warehouse">
                            <div>
                                <img src="/assets/image/icon_list_stock.png" alt="" />
                            </div>
                            <span>Còn hàng</span>
                        </div>
                    </div>
            </div>
            <div className="price_product-cart">
                    <div className="into-money">
                        <span>{price.priceLast} VNĐ</span>
                        <span>Thành tiền: {sumPrice} VNĐ</span>
                    </div>
                    <ul className="quantity">
                        <li className="reduction" onClick={() => handleDecrementProduct(id)}  >-</li>
                        <li className="quantity-buy counter1">{quantity}</li>
                        <li className="increase" onClick={() => handleIncrementProduct(id)} >+</li>
                    </ul>
                    <span className="icon_cart-del" onClick={() => handleDelete(id)}>
                        <img src="/assets/image/icon_cart_del.png" alt="icon-delete" />
                    </span>
            </div>
        </ProductCartItemWrapper>
    )
}

export default ProductCartItem