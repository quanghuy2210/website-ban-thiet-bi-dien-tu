import React from "react";
import {Link} from 'react-router-dom'
import {RelatedProductsWrapper} from './style'
import Title from '../../ComponentCommon/Title'
import ProductItem from "../../Product/ListProduct/ProductItem"; 

const RelatedProducts = ({sliceArray,hadleAddProduct}) => {
    return (
        <RelatedProductsWrapper>
            <Title name='SẢN PHẨM LIÊN QUAN' />
            <div className="list_related-products">
                {
                    sliceArray.map(item => {
                        return <ProductItem key={item.id} item = {item} hadleAddProduct={hadleAddProduct} />
                    })
                }
                
                
            </div>
        </RelatedProductsWrapper>
    )
}

export default RelatedProducts