import styled from "styled-components";
import {device} from '../../../contants'

export const ListProductWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
.title-product-portfolio{
    display: flex;
    border-bottom: 2px solid #000;
    h2{
    display: flex;
    align-items: center;
    background-color: #e00;
    @media ${device.tablet}{
        width: 100%;
        padding: 5px;
    }
    a{
    padding: 0 10px;
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
   }
   .slash-portfolio{
    border-top: 30px solid #4471c2;
    border-left: 30px solid #e00;
    height: 0;
    width: 30px;
    @media ${device.tablet}{
        display: none;
    }
}
   }
}

.list-portfolio{
    display: flex;
    flex-grow: 1;
    list-style-type: none;
    background-color: #4471c2;
    @media ${device.tablet}{
        display: none;
    }
    .item-portfolio{
    margin-right: 10px;
    display: flex;
    align-items: center;
    &:last-child a{
    padding-right: 0;
    border-right: none;
    }
    a{
    padding-right: 10px;
    border-right: 1px solid #fff;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
   }
}
}
.list-product{
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
}

`