import styled from "styled-components";
import {device} from '../../../../contants'

export const ProductItemWrapper = styled.div`
  width: calc(100% / 4);
  @media ${device.tablet}{
        width: calc(100% / 3);
   }
   @media ${device.mobileL}{
        width: calc(100% / 2);
    }
  cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    position: relative;
.discount{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    top: 5px;
    left: 5px;
    background-image: url(/assets/image/giam-gia.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    z-index: 9;
}
.image-product{
    display: inline-block;
    padding: 10px;
    width: 100%;
    max-height: 200px;
    min-height: 200px;
}

.image-product img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
&:hover .image-product{
    transition: 0.5s;
    transform: translateY(-12px);
   
}
.title-product{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  	text-overflow: ellipsis;
    color: #000;
    font-weight: 500;
    min-height: 36px;
    font-size: 1.1rem;
}
.price{
    display: inline-block;
    margin: 20px 0 10px ;
    color: #d42333;
    font-size: 1.1rem;
}
.price span:first-child{
    font-style: italic;
}
.price span:last-child{
    margin-left: 5px;
    font-weight: 600;
}
.cart-product{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.1rem;
    color: #d42333;
}
.cart-product svg{
    width: 10px;
    height: 10px;
    margin-right: 5px;
}
`