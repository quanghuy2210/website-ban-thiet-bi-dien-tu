import React from "react";
import {HeaderWrapper} from './style'
import HeaderTop from "./HeaderTop";
import HeaderCenter from "./HeaderCenter";
import HeaderBottom from "./HeaderBottom";



const Header = ({productArray,listDataMenu,listCart, user, handleLogout}) => {
  return (
    <HeaderWrapper>
      <HeaderTop user={user} handleLogout={handleLogout} />
      <HeaderCenter listProduct={productArray} listCart={listCart}  />
      <HeaderBottom listDataMenu={listDataMenu}  />
    </HeaderWrapper>
  );
}
export default Header