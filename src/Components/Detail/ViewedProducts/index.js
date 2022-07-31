import React from "react";
import {ViewedProductsWrapper} from './style'
import Title from '../../ComponentCommon/Title'
import ProductItem from '../../Product/ListProduct/ProductItem'

const ViewedProducts = ({sliceArray,hadleAddProduct}) => {
    return (
        <ViewedProductsWrapper>
            <Title name=' SẢN PHẨM ĐÃ XEM' />
            <div className="list_related-products">
                {
                    sliceArray.map(item => {
                        return <ProductItem key={item.id} item = {item} hadleAddProduct={hadleAddProduct} />
                    })
                }
                
                
            </div>
        </ViewedProductsWrapper>
    )
}

export default ViewedProducts