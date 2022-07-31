import React from "react";
import {DetailWrapper} from './style'
import DetailLeft from "./DetailLeft";
import DetailCenter from "./DetailCenter";
import DetailRight from "./DetailRight";
import ListInformation from "./ListInformation";
import Characteristic from "./Characteristic";
import Parameter from "./Parameter";
import Video from "./Video";
import RelatedProducts from './RelatedProducts'
import ViewedProducts from './ViewedProducts'
const Detail = ({product, hadleAddProduct,sliceArray}) => {
    const {title,image,price, listImageDetail, listParameter} =product
    return (
        <DetailWrapper>
            <div className="wrapper-product">
                <h2 className="title_product-detail">
                    {title}
                </h2>
                <div className="content_product-detail">
                      <DetailLeft listImageDetail={listImageDetail} listParameter={listParameter} />
                      <DetailCenter price={price} hadleAddProduct={hadleAddProduct} product={product} />
                      <DetailRight />
                </div>
            </div>
            <div className="information-product">
                 <ListInformation />
                 <Characteristic title={title} image={image} />
                 <Parameter title={title} />
                 <Video />
                 <RelatedProducts sliceArray={sliceArray} hadleAddProduct={hadleAddProduct} />
                 <ViewedProducts sliceArray={sliceArray} hadleAddProduct={hadleAddProduct} />
            </div>
        </DetailWrapper>
    )
}

export default Detail