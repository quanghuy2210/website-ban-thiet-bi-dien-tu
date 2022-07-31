import styled from "styled-components";
import {device} from '../../../contants'

export const ViewedProductsWrapper = styled.div`
width: 100%;
.list_related-products{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border-left: 1px solid #ddd;
    @media ${device.tablet}{
        .over-product-item:nth-child(4),.over-product-item:nth-child(5){
           display: none;
        }
    }
    @media ${device.mobileL}{
        .over-product-item:nth-child(3){
           display: none;
        }
    }
    
}
  
`