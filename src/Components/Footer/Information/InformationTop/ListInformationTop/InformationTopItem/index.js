import React from "react";
import {InformationTopItemWrapper} from './style'
 
const InformationTopItem = ({item}) => {
    const {title,listPolicy} = item
    return (
        <InformationTopItemWrapper>
        <h2 className="title-footer-top">{title}</h2>
        <ul className="list-footer-top">
          {listPolicy.map((item,index) => {
               return <li key={index}  className="item-footer-top">{item}</li>
           })}
        </ul>
        </InformationTopItemWrapper>
    )
}
export default InformationTopItem