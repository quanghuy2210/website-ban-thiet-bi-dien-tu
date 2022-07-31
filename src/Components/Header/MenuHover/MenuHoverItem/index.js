import React from "react";
import {Link} from 'react-router-dom'
import {MenuHoverItemWrapper} from './style'
import SubMenu from "./SubMenu";

const MenuHoverItem = ({item}) => {
    const {itemMenu, subMenu} = item
    const { title} = itemMenu
    return (
        <MenuHoverItemWrapper>
            <Link to='/category'>{title}</Link>
            <SubMenu subMenu={subMenu} />
        </MenuHoverItemWrapper>
    )
}

export default MenuHoverItem