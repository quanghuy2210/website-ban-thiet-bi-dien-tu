import React from "react";
import {PromotionItemWrapper} from './style'

const PromotionItem = ({item}) => {
    const {image, title, time} = item
    return (
        <PromotionItemWrapper>
                  <div className="img-promotion">
                        <img src={image} alt="anh khuyen mai" />
                    </div>
                    <h2 className="title-promotion">
                        {title}
                    </h2>
                    <span>{time}</span>
        </PromotionItemWrapper>
    )
}

export default PromotionItem