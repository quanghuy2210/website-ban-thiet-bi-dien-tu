import React from "react";
import {ListParameterWrapper} from './style'

const ListParameter = ({listParameter}) => {
    return (
        <ListParameterWrapper>
            {
                listParameter.map(item => {
                    return(
                        <li className="item-parameter" key={item.desc}>
                            <span>{item.svg}</span>
                            <span>{item.desc}</span>
                        </li>
                    ) 
                })
            }
        </ListParameterWrapper>
    )
}

export default ListParameter