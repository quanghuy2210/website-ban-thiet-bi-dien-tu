import React from "react";
import {Link} from 'react-router-dom'
import {ListProductWrapper} from './style'
import ProductItem from "./ProductItem";

const ListProduct = ({category, hadleAddProduct}) => {
    const {titleProduct,listPortfolio,products} = category
    return (
        <ListProductWrapper>
                <div className="title-product-portfolio">
                    <h2>
                        <Link to='/category'>{titleProduct}</Link>
                        <span className="slash-portfolio"></span>
                    </h2>
                    <ul className="list-portfolio">
                        {
                            listPortfolio.map((item,index) => {
                                return (
                                    <li key={index} className="item-portfolio">
                                        <a href="#">{item}</a>
                                   </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="list-product laptop" >
                    {
                        products.map(item => {
                            return <ProductItem key={item.id} item = {item} hadleAddProduct={hadleAddProduct} />
                        })
                    }
                </div>
           
        </ListProductWrapper>
    )
}

export default ListProduct