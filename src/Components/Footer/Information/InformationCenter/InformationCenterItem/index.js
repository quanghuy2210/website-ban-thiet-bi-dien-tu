import React from "react";
import {InformationCenterItemWrapper} from './style'

const InformationCenterItem = ({item}) => {
    const {title, listInformation} = item
    return (
        <InformationCenterItemWrapper>
             <h2 className="title-showroom">
                        <span>{title}</span>
                        <span>+</span>
                    </h2>
                    <ul className="list-information-showroom">
                        {
                            listInformation.map((item,index) => {
                                return (
                                 <li key={index} className="item-showroom">
                                     {item}
                                   </li>
                                )
                            })
                        }
                    </ul>
        </InformationCenterItemWrapper>
    )
}

export default InformationCenterItem