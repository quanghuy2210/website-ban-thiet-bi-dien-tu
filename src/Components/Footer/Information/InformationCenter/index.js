import React from "react";
import {InformationCenterWrapper} from './style'
import InformationCenterItem from "./InformationCenterItem";

const InformationCenter = ({listShowRoom}) => {
    return (
        <InformationCenterWrapper>
            {listShowRoom.map(item => {
                return <InformationCenterItem key={item.id} item={item} />
            })}
        </InformationCenterWrapper>
    )
}
export default InformationCenter