import React from "react";
import {InformationWrapper} from './style'
import InformationTop from "./InformationTop";
import InformationCenter from "./InformationCenter";
import InformationBottom from "./InformationBottom";

const Information = (props) => {
    const {listPolicy, listShowRoom} = props
    return (
        <InformationWrapper>
            <InformationTop listPolicy={listPolicy} />
            <InformationCenter listShowRoom={listShowRoom} />
            <InformationBottom />
        </InformationWrapper>
    )
}

export default Information