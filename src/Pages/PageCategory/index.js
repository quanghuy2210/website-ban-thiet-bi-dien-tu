import React,{useEffect} from "react";
import Category from "../../Components/Category";

const PageCategory = ({productArray, listImageSliderCategory, listButtonCaregory,hadleAddProduct}) => {
    useEffect(() => {
        document.title = "Danh sách sản phẩm"
      }, [])
    return (
        <>
         <Category productArray={productArray} listImageSliderCategory={listImageSliderCategory} listButtonCaregory={listButtonCaregory} hadleAddProduct={hadleAddProduct} />
        </>
    )
}

export default PageCategory