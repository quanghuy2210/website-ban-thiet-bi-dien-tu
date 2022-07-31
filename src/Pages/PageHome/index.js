import React,{useEffect} from "react";
import SliderBanner from '../../Components/SliderBanner'
import Product from "../../Components/Product";

const PageHome = ({listDataMenu,listImageSlider,listProduct,hadleAddProduct}) => {
    useEffect(() => {
        document.title = "QuangHuy.com - Thiết bị điện tử"
      }, [])
    return (
        <>
            <SliderBanner listDataMenu={listDataMenu} listImageSlider={listImageSlider} />
            <Product hadleAddProduct={hadleAddProduct} listProduct={listProduct} />
        </>
    )
}

export default PageHome