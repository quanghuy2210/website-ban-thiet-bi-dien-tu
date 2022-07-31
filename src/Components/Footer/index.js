import React from "react";
import {FooterWrapper} from './style'
import Contact from "./Contact";
import Information from "./Information";

const Footer = ({listPolicy, listShowRoom}) =>{
    return (
        <FooterWrapper>
            <Contact />
            <Information listPolicy={listPolicy} listShowRoom={listShowRoom} />
        </FooterWrapper>
    )
}

export default Footer