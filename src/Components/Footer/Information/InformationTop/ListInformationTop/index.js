import React from "react";
import {ListInformationTopWrapper} from './style'
import InformationTopItem from "./InformationTopItem";

const ListInformationTop = ({listPolicy}) => {
    return (
        <ListInformationTopWrapper>
            {listPolicy.map(item => {
                return (
                    <InformationTopItem key={item.id} item={item} />
                )
            })}
        </ListInformationTopWrapper>
    )
}
export default ListInformationTop