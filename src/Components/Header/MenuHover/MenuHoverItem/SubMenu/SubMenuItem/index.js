import React from "react";
import {SubMenuItemWrapper} from './style'

const SubMenuItem = ({item}) => {
    const {itemSubMenu} = item
    const {titleSubMenu, listSubMenu} = itemSubMenu
    return (
        <SubMenuItemWrapper>
              <h2 className="title-submenu">{titleSubMenu}</h2>
              <ul className="list-submenu">
                  {
                      listSubMenu.map((item,index) => {
                          return <li key={index}>{item}</li>
                      })
                  }
              </ul>
        </SubMenuItemWrapper>
    )
}

export default SubMenuItem