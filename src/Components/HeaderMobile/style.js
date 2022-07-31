import styled from "styled-components";
import {device} from '../../contants'

export const HeaderMobileWrapper = styled.div`
width: 100%;
height: auto;
display: none;
@media ${device.mobileL}{
    display: block;
}
.header_mobile-top{
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3b5998;
    position: relative;
}
.check_menu-mobile{
    display: none;
    &:checked ~ .list_menu-mobile{
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transition: 0.5s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
  }
}
.icon_menu-mobile{
    cursor: pointer;
    width: 20px;
    height: 20px;
    fill: #fff;
}
.logo-mobile{
    font-weight: 500;
    font-size: 1.5rem;
}
.logo-mobile a{
  color: #fff;
}

.cart-mobile{
    cursor: pointer;
    display: inline-block;
    position: relative;
}
.cart-mobile svg{
    width: 20px;
    height: 20px;
    fill: #fff;
}
.cart-mobile span{
    display: flex;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -2px;
    font-weight: bold;
    color: #fff;
    font-size: 0.8rem;
    background-color: #e00;
    justify-content: center;
    align-items: center;
}
.search-mobile{
    width: 100%;
    position: relative;
     form{
    display: flex;
    width: 100%;
    .over-input{
        margin: 0;
        flex-grow: 1;
        label{
            display: none;
        }
        input{
             width: 100%;
             border: 3px solid #ddd !important;
             border-right: none;
             background-color: #fff !important;
             border-radius: 0;
        }
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #ddd;
        background-color: #ddd;
        font-size: 1.1rem;
        color: #000;
    }
    }
    .seach-time-mount{
        width: 100%;
        position: absolute;
        background-color: #fff;
        z-index: 99;
        max-height: 50vh;
        overflow: auto;
        table{
            tr{
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                border-left: 1px solid #ddd;
                .image_product-search{
                    width: 80px;
                    height: 80px;
                }
                .information_product-search{
                    h3{
                        font-size: 1.2rem;
                        font-weight: 500;
                    }
                    span{
                        font-size: 1.1rem;
                        color: #e00;
                    }
                }
            }
        }
    }
}

.search-mobile form input:first-child{
    
}
.search-mobile form input:last-child{
    cursor: pointer;
    padding: 3px;
    border: none;
    background-color: #ddd;
}
   
`