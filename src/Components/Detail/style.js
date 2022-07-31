import styled from "styled-components";
import {device} from '../../contants'

export const DetailWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 75px;
    @media ${device.tablet}{
        padding: 10px;
    }
    .wrapper-product{
        .title_product-detail{
            font-size: 1.8rem;
            font-weight: 800px;
         }
         .content_product-detail{
             padding: 20px 0;
             display: flex;
             @media ${device.mobileL}{
                flex-direction: column;
             }
         }
   }
   .information-product{
     padding-top: 10px;
   }
`