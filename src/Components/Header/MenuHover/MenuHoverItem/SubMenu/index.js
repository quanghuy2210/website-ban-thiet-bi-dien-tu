import React from "react";
import {SubMenuWrapper} from './style'
import SubMenuItem from "./SubMenuItem";

const SubMenu = ({subMenu}) => {
    return (
        <SubMenuWrapper className="submenu-block">
           {
               subMenu.map(item => {
                   return <SubMenuItem key={item.id} item={item} />
               })
           }
        </SubMenuWrapper>
    )
}
export default SubMenu