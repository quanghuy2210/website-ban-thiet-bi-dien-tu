import React from "react";
import {ListPromotionWrapper} from './style'
import PromotionItem from "./PromotionItem";

const ListPromotion = ({listPromotion}) => {
    return (
        <ListPromotionWrapper>
            {
                listPromotion.map(item => {
                     return (
                        <PromotionItem key={item.id} item={item} />
                     )
                })
            }
        </ListPromotionWrapper>
    )
}

export default ListPromotion