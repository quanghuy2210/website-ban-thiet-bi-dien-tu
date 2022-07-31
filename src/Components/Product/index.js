import React from 'react'
import {ProductWrapper} from './style'
import ListProduct from './ListProduct'

const Product = ({listProduct,hadleAddProduct}) => {
    return (
        <ProductWrapper>
            {
                listProduct.map(item => {
                    return <ListProduct key={item.id} category={item} hadleAddProduct={hadleAddProduct} />
                })
            }
        </ProductWrapper>
    )
}
export default Product