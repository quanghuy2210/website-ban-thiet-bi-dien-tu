import styled from "styled-components";
import {device} from '../../../contants'

export const CartRightWrapper = styled.div`
    width: 30%;
    border: 1px solid #de0b00;
    height: fit-content;
    @media ${device.mobileL}{
        width: 100%;
    }
.title_form-cart{
    padding: 10px;
    font-size: 1.7rem;
    font-weight: 500;
    color: #fff;
    background-color: #de0b00;
}
form{
    padding: 10px;
    .para_form-cart{
    line-height: 20px;
    font-size: 1.1rem;
    margin-bottom: 10px;
    a{
    color:#185ede;
    font-weight: bold;

   }
   }
   .over-input{
    flex-direction: column;
    label{
        width: 100%;
        font-weight: 600;
    }
    input{
        width: 100%;
        border: 1px solid #000;
    }
   }
   .input-home{
    .over-input{
        flex-direction: row-reverse;
        label{
            margin-left: 5px;
            flex-grow: 1;
        }
        input{
            width: fit-content;
        }
        &:last-child{
            label{
                display: none;
            }
            input{
                width: 100%;
            }
        }
    }
   }
   .comment{
    .over-input{
        input{
            display: none;
        }
    }
    textarea{
        width: 100%;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
   }
   .input-radio{
    .over-input{
        flex-direction: row-reverse;
        input{
            width: fit-content;
        }
        label{
            margin-left: 5px;
            flex-grow: 1;
            font-weight: 400;
        }
    }
   }
}


.btn_order-cart{
    cursor: pointer;
    width: 100%;
    padding: 10px;
    color: #fff;
    background-color: #de0b00;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
} 
.btn_order-cart span:first-child{
    margin-bottom: 10px;
    font-size: 1.7rem;
    @media ${device.tablet}{
        font-size: 1.4rem;
        margin-bottom: 5px;
    }
}
.btn_order-cart span:last-child{
    font-size: 1.1rem;
}
`