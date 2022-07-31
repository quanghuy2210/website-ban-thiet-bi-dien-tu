import React,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Detail from "../../Components/Detail";

const PageDetail = ({productArray, hadleAddProduct, sliceArray}) => {
    const {id} = useParams()
    const [key, setKey] = useState('')
    useEffect(()=>{
        setKey(id)
        document.title = "Chi tiết sản phẩm"
    },[key])
    const product = productArray.find(item => item.id === key)
    if (!product)  return null
    
    return (
        <Detail product={product} hadleAddProduct={hadleAddProduct} sliceArray={sliceArray} />
    )
}

export default PageDetail

