import styled from "styled-components";
import {device} from '../../../contants'

export const CartLeftWrapper = styled.div`
    margin-right: 10px;
    width: 70%;
    @media ${device.mobileL}{
        width: 100%;
        margin-right: 0;
    }
.total-money{
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
}

.total-money span:first-child{
    font-size: 1.1rem;
}
.total-money .money{
    margin: 0 5px 0 10px;
    font-size: 2rem;
    color: #de0b00;
    font-weight: bold;
}
.total-money .unit{
   color: #de0b00;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   min-height: 20px;
   font-weight: bold;
   font-size: 1.2rem;
}
.form-code{
    display: flex;
}
.insert-code{
    padding: 5px;
    margin:0 5px 0 10px;
}
.form-code .apply{
    cursor: pointer;
    padding: 3px 10px;
    color: #fff;
    background-color: #de0b00;
    border: none;
}
.transfer-instructions{
    font-size: 1.3rem;
    line-height: 20px;
}
.transfer-instructions li{
    margin-bottom: 5px;
}
.name-ct{
    font-weight: bold;
}
.transfer-instructions .phone span{
    margin-right: 50px;
}
.table-cart{
    width: 100%;
}
.table-cart td,.table-cart th{
    padding: 20px 10px;
    text-align: center;
    font-size: 1.1rem;
}
`