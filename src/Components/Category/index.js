import React,{useState,useEffect} from "react";
import {CategoryWrapper} from './style'
import ListProduct from "./ListProduct";
// import Button from '../ComponentCommon/Button'
import _intersection from 'lodash/intersection'
import SliderImageBanner from '../SliderImageBanner'

const Category = ({productArray, listImageSliderCategory, listButtonCaregory,hadleAddProduct}) => {
    const [listFilter,setListFilter] = useState([])
    const [nameCategory, setNameCategory] = useState([])
    const [listSort, setListSort] = useState([])
    const [isSorting,setIsSorting] = useState(false)
    const [key, setKey] = useState('')

    useEffect(() => {
        if(nameCategory.length){
            const newList = productArray.filter(item => nameCategory.includes(item.category))
            setListFilter(newList)
        }else{
            setListFilter(productArray)
        }

    },[nameCategory])
    const handleClick = (event) => {
        const btnElement = event.target.innerText
        setKey(btnElement)
        if(nameCategory.includes(btnElement)){
            // ton tai => xoa
            const newList = nameCategory.filter( item => item !== btnElement)
            setNameCategory(newList)
        } else {
            // chua ton tai => them
            setNameCategory([...nameCategory, btnElement])
        } 
    }
    const data2 = [...listFilter]
    const handleIncrease = () => {
        setIsSorting(true)
        const newList = data2.sort((a,b)=>{
            if(a.price.priceLast > b.price.priceLast) return 1
            if(a.price.priceLast === b.price.priceLast) return 0
            if(a.price.priceLast < b.price.priceLast) return -1
         })
         setListSort(newList)
    }
    const handleReduce = () => {
        setIsSorting(true)
        const newList = data2.sort((a,b)=>{
            if(a.price.priceLast > b.price.priceLast) return -1
            if(a.price.priceLast === b.price.priceLast) return 0
            if(a.price.priceLast < b.price.priceLast) return 1
         })
         setListSort(newList)
    }
    const handleDefault = () => {
        setIsSorting(false)
    }
    const hanleProducer = (event) => {
        const btnElement = event.target.innerText
        const listNew = productArray.filter(item => {
            const {title} = item
            if (title.toLowerCase().includes(btnElement.toLowerCase())) return true
        })
         setListFilter(listNew)
    }
    const handleClickPrice = (event) => {
        const btnElement = event.target.innerText
        if(btnElement === 'Dưới 1 triệu'){
            const listNew = productArray.filter(item => item.price.priceLast <= 1000000)
            setListFilter(listNew)
        }else if(btnElement === 'Từ 1 triệu - 4 triệu'){
            const listNew2 = productArray.filter(item => 1000000 <= item.price.priceLast && item.price.priceLast <= 4000000)
            setListFilter(listNew2)
        }else if(btnElement === 'Từ 4 triệu - 10 triệu'){
            const listNew3 = productArray.filter(item => 4000000 <= item.price.priceLast && item.price.priceLast <= 10000000)
            setListFilter(listNew3)
        }else if(btnElement === 'Từ 10 triệu - 20 triệu'){
            const listNew4 = productArray.filter(item => 10000000 <= item.price.priceLast && item.price.priceLast <= 20000000)
            setListFilter(listNew4)
        }else{
            const listNew5 = productArray.filter(item =>item.price.priceLast >= 20000000)
            setListFilter(listNew5)
        }
    }
    const getData = () => {
        if(isSorting) return listSort
        if(listFilter.length) return listFilter
        return productArray
    }
    const data = getData()
    return (
        <CategoryWrapper>
            <SliderImageBanner listImageSlider={listImageSliderCategory} />
            <div className="filter-category">
                {
                    listButtonCaregory.map(item => {
                        return (
                        <button key={item.id} className={`${nameCategory.includes(item.button) ? "active" : ""}`} onClick={handleClick}>
                            {item.button}
                        </button>
                        )

                    })
                }
            
            </div>
            <div className="wrapper-content">
                <table className="wrapper-filter">
                    <tr>
                        <th colSpan={2} >Sắp xếp theo giá:</th>
                    </tr>
                    <tr>
                        <td onClick={handleIncrease}>Tăng dần</td>
                        <td onClick={handleReduce}>Giảm dần</td>
                    </tr>
                    <tr>
                        <td onClick={handleDefault}>Mặc định</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Lọc theo hãng:</th>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>DELL</td>
                        <td onClick={hanleProducer}>ACER</td>
                        
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>APPLE</td>
                        <td onClick={hanleProducer}>SAMSUNG</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>HP</td>
                        <td onClick={hanleProducer}>ASUS</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>LENOVO</td>
                        <td onClick={hanleProducer}>LOGITECH</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>TP-LINK</td>
                        <td onClick={hanleProducer}>KINGSTON</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Lọc sản phẩm theo giá:</th>
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Dưới 1 triệu</td>
                        <td onClick={handleClickPrice}>Từ 1 triệu - 4 triệu</td>
                        
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Từ 4 triệu - 10 triệu</td>
                        <td onClick={handleClickPrice}>Từ 10 triệu - 20 triệu</td>
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Trên 20 triệu</td>
                    </tr>
                    
                </table>
                <table className="wrapper-filter-mobile" >
                    <tr>
                        <th >Sắp xếp theo giá:</th>
                    </tr>
                    <tr>
                        <td onClick={handleIncrease}>Tăng dần</td>
                    </tr>
                    <tr>
                        <td onClick={handleReduce}>Giảm dần</td>
                    </tr>
                    <tr>
                        <td onClick={handleDefault}>Mặc định</td>
                    </tr>
                    <tr>
                        <th >Lọc theo hãng:</th>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>DELL</td>
                    </tr>
                    <tr>
                         <td onClick={hanleProducer}>ACER</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>APPLE</td>
                    </tr>
                    <tr>
                         <td onClick={hanleProducer}>SAMSUNG</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>HP</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>ASUS</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>LENOVO</td>
                    </tr>
                    <tr>
                         <td onClick={hanleProducer}>LOGITECH</td>
                    </tr>
                    <tr>
                        <td onClick={hanleProducer}>TP-LINK</td>
                    </tr>
                    <tr>
                       <td onClick={hanleProducer}>KINGSTON</td>
                    </tr>
                    <tr>
                        <th>Lọc sản phẩm theo giá:</th>
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Dưới 1 triệu</td>
                        
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Từ 1 triệu - 4 triệu</td>
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Từ 4 triệu - 10 triệu</td>
                    </tr>
                    <tr>
                         <td onClick={handleClickPrice}>Từ 10 triệu - 20 triệu</td>
                    </tr>
                    <tr>
                        <td onClick={handleClickPrice}>Trên 20 triệu</td>
                    </tr>
                    
                </table>
                <ListProduct productArray={data} hadleAddProduct={hadleAddProduct} />
            </div>
            
        </CategoryWrapper>
    )
}

export default Category