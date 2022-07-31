import styled from "styled-components";
import {device } from '../../contants'

export const CartWrapper = styled.div`
    padding: 0 75px 20px;
    @media ${device.tablet}{
        padding: 0 10px 10px;
    }
.title_cart-wrapper{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
.title_cart-wrapper h2{
    font-weight: 500;
    margin-right: 10px;
}
.title_cart-wrapper a{
    padding:8px 10px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #24aa98;
}
.wrapper-cart{
    width: 100%;
    display: flex;
    @media ${device.mobileL}{
        flex-wrap: wrap;
    }
}




`