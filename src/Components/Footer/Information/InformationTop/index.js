import React from "react";
import {InformationTopWrapper} from './style'
import ListInformationTop from "./ListInformationTop";
import CustomerCare from "./CustomerCare";

const InformationTop = ({listPolicy}) => {
    return (
        <InformationTopWrapper>
            <ListInformationTop listPolicy={listPolicy} />
            <CustomerCare />
        </InformationTopWrapper>
    )
}

export default InformationTop