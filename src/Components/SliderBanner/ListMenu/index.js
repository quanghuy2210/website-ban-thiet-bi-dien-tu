import React from "react";
import {ListMenuWrapper} from './style'
import MenuItem from "./MenuItem";

const ListMenu = ({listDataMenu}) => {
    return (
        <ListMenuWrapper>
            {
                listDataMenu.map(item => {
                    return <MenuItem key={item.id} item={item} />  
                } )
            }
        </ListMenuWrapper>
    )
}

export default ListMenu