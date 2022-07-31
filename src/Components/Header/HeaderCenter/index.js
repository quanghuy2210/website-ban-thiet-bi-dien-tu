import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {HeaderCenterWrapper} from './style'
import Input from '../../ComponentCommon/Input'
 
const HeaderCenter = ({listProduct, listCart}) => { 
    const [listSearch, setListSearch] = useState([])
    const [key, setKey] = useState('')

    const deletePunctuation = str => {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
   
    const handleChangeSearch = (event) => {
        const {value} = event.target
        setKey(value)
       const newList = listProduct.filter(item => {
           const {title} = item
           if(title.toLowerCase().includes(value.toLowerCase()) || deletePunctuation(title).toLowerCase().includes(value.toLowerCase())) return true
       })
       if(value) {
           setListSearch(newList)
       }else{
           setListSearch([])
       }
    }
    const handResetListSearch = () => {
        setListSearch([])
    }

    return (
        <HeaderCenterWrapper>
               <h1 className="logo">
                    <Link to='/'>
                        <img src="/assets/image/logo.png" alt="logo" />
                    </Link>
                </h1>
                <div className="form-search">
                   <form action="">
                      <Input
                          placeholder='Nhập từ khóa tìm kiếm'
                          name='search'
                          type='text'
                          value={key}
                          onChange={handleChangeSearch} 
                       />
                       <select>
                           <option value="">Sản phẩm</option>
                           <option value="">Bài viết</option>
                       </select>
                      <div className='button-search' onClick={handResetListSearch}><Link to={`/search/${key}`}>Tìm kiếm</Link></div>
                       
                   </form>
                   <div className='seach-time-mount'>
                   <table  >
                    {
                        listSearch.map(item => {
                            const {id,title,image,price} = item
                                return (
                                
                                    <tr key={id}>
                                       <Link to={`/detail/${id}`}>
                                       <td className='image_product-search'>
                                            <img src={image.src} alt={image.alt} />
                                        </td>
                                        <td className='information_product-search'>
                                             <h3>{title}</h3> 
                                             <span>Giá: {price.priceLast}</span>
                                        </td>
                                        </Link>
                                    </tr>
                                )
                        }) 
                    }
                   </table>
                   </div>
                </div>

                <div className="phone-purchase">
                    <span>
                        Gọi mua hàng:
                    </span>
                    <span>
                        1900 2164
                    </span>
                </div>
                <div className="cart">
                    <Link to='/cart' className="item-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        <span>
                            Giỏ hàng
                        </span>
                        <span>{listCart.length}</span>
                    </Link>
                </div>
        </HeaderCenterWrapper>
    )
}

export default HeaderCenter