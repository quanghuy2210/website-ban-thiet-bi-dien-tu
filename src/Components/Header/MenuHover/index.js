import React from "react";
import {MenuHoverWrapper} from './style'
import MenuHoverItem from "./MenuHoverItem";

const MenuHover = ({listDataMenu}) => {
    return (
        <MenuHoverWrapper className="over-menu-hover">
            {
                listDataMenu.map(item => {
                    return <MenuHoverItem key={item.id} item={item} />  
                } )
            }
        </MenuHoverWrapper>
    )
}

export default MenuHover