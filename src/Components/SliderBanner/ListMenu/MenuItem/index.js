import React from "react";
import {Link} from 'react-router-dom'
import {MenuItemWrapper} from './style'
import SubMenu from "./SubMenu";

const MenuItem = ({item}) => {
    const {id,itemMenu, subMenu} = item
    const {svg, title} = itemMenu
    return (
        <MenuItemWrapper >
                {svg}
                <Link to='/category'>{title}</Link>
            <SubMenu subMenu={subMenu} />
        </MenuItemWrapper>
    )
}

export default MenuItem