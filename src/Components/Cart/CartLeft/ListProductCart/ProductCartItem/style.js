import styled from "styled-components";
import {device} from '../../../../../contants'

export const ProductCartItemWrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    display: flex;
.name-product{
    padding: 5px;
    width: 50%;
    display: flex;
    border-right: 1px solid #eee;
}
.image_product-cart{
    margin-right: 10px;
    display: block;
    min-width: 90px;
    max-width: 90px;
    height: 90px;
    img{
       width: 100%;
       height: 100%;
   }
}
.name_product-cart h3 a{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  	text-overflow: ellipsis;
    font-size: 1.2rem;
    line-height: 20px;
    color: #000;
    font-weight: 500;

}
.warehouse{
    margin: 20px 0;
    display: flex;
    color: #eaaa00;
    font-size: 1.1rem;
    span{
       margin-left: 5px;
   }
}

.price_product-cart{
    padding: 10px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media ${device.mobileL}{
        padding: 5px;
        flex-direction: column;
    }
}
.into-money{
    display: flex;
    flex-direction: column;
    color: #e00;
    font-size: 1.3rem;
    @media ${device.mobileL}{
        font-size: 1.1rem;
    }
    span:last-child{
    margin-top: 10px;
    font-weight: 600;
    }
}

.quantity{
    display: flex;
    li{
       width: 32px;
       height: 30px;
       border: 1px solid #ddd;
       display: flex;
       align-items: center;
       justify-content: center;
       @media ${device.mobileL}{
           width: 24px;
           height: 24px;
       }
       &:nth-child(2){
       width: 36px;
       border-left: none;
       border-right: none;
     }
   }
}
.reduction, .increase{
    cursor: pointer;
}
.reduction:hover, .increase:hover{
    background-color: #ddd;
}
.icon_cart-del{
    width: 30px;
    height: 30px;
    cursor: pointer;
    @media ${device.mobileL}{
        width: 20px;
        height: 20px;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
`