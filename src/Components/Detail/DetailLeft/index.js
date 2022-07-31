import React from "react";
import {DetailLeftWrapper} from './style'
import ListParameter from "./ListParameter";
import SliderNav from '../../SliderNav' 

const DetailLeft = ({listImageDetail, listParameter}) => {
    return (
        <DetailLeftWrapper>
                <SliderNav listImageDetail={listImageDetail} />
                <ListParameter listParameter={listParameter} />
        </DetailLeftWrapper>
    )
}

export default DetailLeft